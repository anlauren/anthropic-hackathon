from fastapi import APIRouter, UploadFile, File, HTTPException, status
from app.services.knowledge.service import KnowledgeService

router = APIRouter()
knowledge_service = KnowledgeService()

@router.post("/new", response_model=str)
async def ingest_knowledge_base(knowledge: UploadFile = File(...)) -> str:

	# Check the file extension
	if not knowledge.filename.endswith(".md"):
		raise HTTPException(
			status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
			detail="Only markdown files (.md) are accepted."
		)
	
	# Read the contents of the file
	knowledge_contents = await knowledge.read()
	knowledge_string = knowledge_contents.decode("utf-8")

	response = knowledge_service.ingest_knowledge(knowledge=knowledge_string)
	print(response)
	return response["message"]
