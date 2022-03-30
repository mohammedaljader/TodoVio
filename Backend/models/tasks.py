from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import String, Boolean
from config.db import meta

tasks = Table(
    'task', meta,
    Column('task_id', String(36), primary_key=True),
    Column('task_title', String(255)),
    Column('task_completed', Boolean),
    Column('card_id', String(36), ForeignKey('card.card_id'))
)
