from anthropic import Anthropic, HUMAN_PROMPT, AI_PROMPT
from app.services.content_matching.service import ContentMatchingService
import json

anthropic = Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="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",
)

def generate_question_extraction_prompt(base_questions_as_text: str) -> str:
 return """
 {HUMAN_PROMPT}Extract questions as JSON array of strings from text: {base_questions_as_text}{AI_PROMPT}
 [
"""

def generate_new_question_based_on_content_prompt(content: str, question: str) -> str:
  return f"""{HUMAN_PROMPT}
    <document>{content} </document>
    <question>{question} </question>
    Above is a document and a question related to that document. Please write a new question that is related to the document in the same style.{AI_PROMPT}"""



class QuestionGeneratorService:
  content_matching_service: ContentMatchingService

  def __init__(self):
    self.content_matching_service = ContentMatchingService()
  
  def generate_new_questions(self, base_questions_as_text: str) -> list[str]:
    questions = self.__parse_questions_from_text(base_questions_as_text)
    
    question_content_pairs = []
    for question in questions:
      content = self.content_matching_service.get_content_related_to_question(question)
      question_content_pairs.append({"question": question, "content": content})
    
    new_questions = []
    for pair in question_content_pairs:
      new_question = self.__generate_new_question_based_on_content(pair["content"], pair["question"])
      new_questions.append(new_question)
    return new_questions.join("\n")
  
  def __parse_questions_from_text(self, text: str) -> list[str]:
    completion = anthropic.completions.create(
        model="claude-2",
        temperature=0,
        prompt=generate_question_extraction_prompt(base_questions_as_text=text)
    )
    print(completion)
    return json.loads(completion.choices[0].text)
  
