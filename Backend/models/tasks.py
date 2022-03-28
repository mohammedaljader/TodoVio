from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, Boolean
from config.db import meta

tasks = Table(
    'task', meta,
    Column('task_id', Integer, primary_key=True),
    Column('task_title', String(255)),
    Column('task_completed', Boolean),
    Column('card_id', Integer, ForeignKey('card.card_id'))
)
