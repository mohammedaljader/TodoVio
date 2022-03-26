from typing import Optional
from pydantic import BaseModel


class Todos(BaseModel):
    id: Optional[int]
    title: str
    content: str
