from typing import Optional
from uuid import UUID

from pydantic import BaseModel


class Card(BaseModel):
    card_id: Optional[UUID]
    card_title: str


