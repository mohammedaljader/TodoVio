from typing import Optional
from pydantic import BaseModel


class Task(BaseModel):
    id: Optional[int]
    title: str
    completed: bool
    card_id: int
