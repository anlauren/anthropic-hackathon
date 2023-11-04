from fastapi import APIRouter
from app.services.knowledge.service import KnowledgeService

router = APIRouter()
knowledge_service = KnowledgeService()

@router.post("/new", response_model=str)
def ingest_knowledge_base(knowledge: str) -> str:
  response = knowledge_service.ingest_knowledge(knowledge=knowledge)
  print(response)
  return response["message"]
