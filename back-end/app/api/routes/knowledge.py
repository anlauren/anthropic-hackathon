from fastapi import APIRouter, UploadFile, File, HTTPException, status
from app.services.knowledge.service import KnowledgeService

router = APIRouter()
knowledge_service = KnowledgeService()

@router.post("/new", response_model=str)
async def ingest_knowledge_base(knowledge: UploadFile = File(...)) -> str:

	# Check the file extension
	if not ( knowledge.filename.endswith(".md") or knowledge.filename.endswith(".pdf") ):
		raise HTTPException(
			status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
			detail="Only markdown files (.md) and (.pdf) are accepted."
		)
	print('ingesting knowledge')
	response = await knowledge_service.ingest_knowledge(knowledge_binary=knowledge.file, filename=knowledge.filename)
	print(response)
	return response["message"]
