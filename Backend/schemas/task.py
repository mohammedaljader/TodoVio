from typing import Optional
from pydantic import BaseModel


class Task(BaseModel):
    task_id: Optional[int]
    title: Optional[str]
    completed: Optional[bool]
    card_id: Optional[int]
