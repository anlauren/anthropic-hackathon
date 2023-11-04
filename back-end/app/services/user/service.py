"""
user.service.py
"""
from app.services.database.models import User as UserDB
from app.services.database.service import DatabaseService
from app.services.user.schema import User, UserInput

from typing import List


class UserService:
    def __init__(self):
        self.database_service = DatabaseService(table_name='users', pydantic_model=User)

    def create(self, create_input: UserInput) -> User:
        return self.database_service.create(create_input)

    def get(self, user_id: str) -> User:
        return self.database_service.get(user_id)

    def list(self) -> List[User]:
        return self.database_service.list()