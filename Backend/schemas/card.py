from typing import Optional
from pydantic import BaseModel


class Card(BaseModel):
    id: Optional[int]
    title: str


