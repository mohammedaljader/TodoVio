from typing import Optional
from uuid import UUID

from pydantic import BaseModel


class Task(BaseModel):
    task_id: Optional[UUID]
    task_title: Optional[str]
    task_completed: Optional[bool]
    card_id: Optional[UUID]
