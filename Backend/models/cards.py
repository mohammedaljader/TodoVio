from uuid import UUID

from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import String
from config.db import meta

cards = Table(
    'card', meta,
    Column('card_id', String(36), primary_key=True),
    Column('card_title', String(50))
)

