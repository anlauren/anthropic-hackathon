from anthropic import Anthropic, HUMAN_PROMPT, AI_PROMPT
from app.services.content_matching.service import ContentMatchingService
import json
import os
from typing import List

anthropic = Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY"),
)

def generate_question_extraction_prompt(base_questions_as_text: str) -> str:
 return f"{HUMAN_PROMPT}Extract questions as JSON array of strings from text: {base_questions_as_text}{AI_PROMPT}["

def generate_new_question_based_on_content_prompt(content: str, question: str) -> str:
  return f"""{HUMAN_PROMPT}
    <document>{content}</document>
    <question>{question}</question>
    Above is a document and a question related to that document. 
    Please write a new question that is related to the document in the same style.
    do not include the document or the original question in your answer.
    {AI_PROMPT}
    Here are the questions:
"""



class QuestionGeneratorService:
  content_matching_service: ContentMatchingService

  def __init__(self):
    self.content_matching_service = ContentMatchingService()
  
  def generate_new_questions(self, base_questions_as_text: str) -> List[str]:
    questions = self.__parse_questions_from_text(base_questions_as_text)
    
    question_content_pairs = []
    for question in questions:
      print("Asking for question", question)
      content = self.content_matching_service.get_content_related_to_question(question)
      question_content_pairs.append({"question": question, "content": content})
    
    new_questions = []
    for pair in question_content_pairs:
      new_question = self.__generate_new_question(pair["content"], pair["question"])
      new_questions.append(new_question)
    return "\n".join(new_questions)
  
  def __parse_questions_from_text(self, text: str) -> List[str]:
    completion = anthropic.completions.create(
        model="claude-2",
        temperature=0,
        max_tokens_to_sample=5000,
        prompt=generate_question_extraction_prompt(base_questions_as_text=text)
    )
    print("GOT COMPLETION", completion.completion)
    return json.loads("[" + completion.completion)
  

  def __generate_new_question(self, content: str, question: str) -> str:
    completion = anthropic.completions.create(
        model="claude-2",
        temperature=0,
        max_tokens_to_sample=5000,
        prompt=generate_new_question_based_on_content_prompt(content=content, question=question)
    )
    print(completion)
    return completion.completion
  
