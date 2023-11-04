"""
user.schema.py
"""
from pydantic import BaseModel


class User(BaseModel):
    id: str
    name: str
    email: str


class UserInput(BaseModel):
    name: str
    email: str
