from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta

todosEntity = Table(
    'todos', meta,
    Column('id', Integer, primary_key=True),
    Column('title', String(50)),
    Column('content', String(255))
)
