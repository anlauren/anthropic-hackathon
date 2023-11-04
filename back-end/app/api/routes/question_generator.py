from fastapi import APIRouter
from app.services.question_generator.service import QuestionGeneratorService

router = APIRouter()
question_generator_service = QuestionGeneratorService()

@router.get("/alternative_questions", response_model=str)
def get_alternative_questions(base_questions_text: str):
    return question_generator_service.generate_new_questions(base_questions_text)
