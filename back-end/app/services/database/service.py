"""
database.service.py
"""
import json
import os
from typing import Type, List, Optional, Union, Generic, TypeVar
from pydantic import BaseModel
from pathlib import Path

T = TypeVar("T", bound=BaseModel)

class DatabaseService(Generic[T]):
    BASE_DIR = "/repos/my_db/"

    def __init__(self, pydantic_model: Type[T], table_name: str):
        self.pydantic_model = pydantic_model
        self.home_dir = str(Path.home())
        self.base_path = os.path.join(self.home_dir, self.BASE_DIR)
        self.file_path = os.path.join(self.base_path, f"{table_name}.json")
        
        if not os.path.exists(self.base_path):
            os.makedirs(self.base_path, exist_ok=True)

        if os.path.exists(self.file_path):
            with open(self.file_path, "r") as file:
                self.memory = json.load(file)
        else:
            self.memory = []
            with open(self.file_path, "w") as file:
                json.dump(self.memory, file)

    def persist(self):
        with open(self.file_path, "w") as file:
            json.dump(self.memory, file, indent=4)

    def create(self, obj: BaseModel) -> T:
        highest_index = max((int(item['id']) for item in self.memory), default=-1)
        new_item = obj.dict()
        new_item['id'] = str(highest_index + 1)
        self.memory.append(new_item)
        self.persist()
        return self.pydantic_model(**new_item)

    def list(self) -> List[T]:
        return [self.pydantic_model(**item) for item in self.memory]

    def get(self, item_id: str) -> Optional[T]:
        item = next((item for item in self.memory if item['id'] == item_id), None)
        return self.pydantic_model(**item) if item else None

    def update(self, item_id: str, update_data: dict) -> Optional[T]:
        item = next((item for item in self.memory if item['id'] == item_id), None)
        if not item:
            return None
        item.update(update_data)
        self.persist()
        return self.pydantic_model(**item)

    def delete(self, item_id: str) -> Union[str, None]:
        item = next((item for item in self.memory if item['id'] == item_id), None)
        if not item:
            return None
        self.memory = [item for item in self.memory if item['id'] != item_id]
        self.persist()
        return "Item deleted successfully."