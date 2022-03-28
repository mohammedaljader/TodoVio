from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta

cards = Table(
    'card', meta,
    Column('card_id', Integer, primary_key=True),
    Column('card_title', String(50))
)

