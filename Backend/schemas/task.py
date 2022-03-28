from typing import Optional
from pydantic import BaseModel


class Task(BaseModel):
    task_id: Optional[int]
    title: str
    completed: bool
    card_id: int
