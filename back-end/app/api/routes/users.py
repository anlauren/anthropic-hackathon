from fastapi import APIRouter, HTTPException, status
from app.services.user.service import UserService
from app.services.user.schema import User, UserInput

router = APIRouter()


@router.get("/{user_id}", response_model=User, summary="Get user by id - new")
def get_user(user_id: str):
    user_service = UserService()
    user = user_service.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/", response_model=User, status_code=status.HTTP_201_CREATED)
def create_user(user_create: UserInput):
    user_service = UserService()
    user = user_service.create(user_create)
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User could not be created")
    return user