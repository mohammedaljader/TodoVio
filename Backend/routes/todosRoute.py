from fastapi import APIRouter, HTTPException

from schemas.todos import Todos
from config.db import conn
from models.todos import todosEntity

todosRoute = APIRouter()


# Todo: add HTTPException and make unit tests

@todosRoute.get("/")
async def get_all_todos():
    return conn.execute(todosEntity.select()).fetchall()


@todosRoute.get("/{id}")
async def get_by_id(todos_id: int):
    return conn.execute(todosEntity.select().where(todosEntity.c.id == todos_id)).fetchall()


@todosRoute.post("/")
async def add_todos(todos: Todos):
    conn.execute(todosEntity.insert().values(
        title=todos.title,
        content=todos.content
    ))
    return conn.execute(todosEntity.select()).fetchall()


@todosRoute.put("/{id}")
async def update_todos(todos_id: int, todos: Todos):
    conn.execute(todosEntity.update_todos().values(
        title=todos.title,
        content=todos.content
    ).where(todosEntity.c.id == todos_id))
    return conn.execute(todosEntity.select()).fetchall()


@todosRoute.delete("/{id}")
async def delete_todos(todos_id: int):
    conn.execute(todosEntity.delete_todos().where(todosEntity.c.id == todos_id))
    return conn.execute(todosEntity.select()).fetchall()
