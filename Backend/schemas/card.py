from typing import Optional
from pydantic import BaseModel


class Card(BaseModel):
    card_id: Optional[int]
    title: str


