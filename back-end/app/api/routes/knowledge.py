from fastapi import APIRouter


router = APIRouter()

@router.post("/new", response_model=str)
def get_alternative_questions(knowledge: str) -> str:
  print("Got knowledge", knowledge)
  return "Done"
