from fastapi import APIRouter, Depends, HTTPException, status
from app.services.agent.service import AgentService

router = APIRouter()
agent_service = AgentService()

@router.post("/chat-agent", response_model=str)
async def generate_agent_response(user_input: str):
    response = await agent_service.generate_agent_response(user_input=user_input)
    return response