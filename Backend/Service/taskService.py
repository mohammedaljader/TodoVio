from uuid import UUID

from schemas.task import Task
from config.db import conn
from models.tasks import tasks
from Service.cardService import getCardById


async def getAllTasks():
    return conn.execute(tasks.select()).fetchall()


async def getTaskById(task_id: UUID):
    return conn.execute(tasks.select().where(tasks.c.task_id == task_id)).fetchall()


async def addTask(task: Task):
    card = await getCardById(task.card_id)
    if card:
        conn.execute(tasks.insert().values(
            task_id=task.task_id,
            task_title=task.task_title,
            task_completed=task.task_completed,
            card_id=task.card_id
        ))
        return True
    return False


async def updateTask(task_id: UUID, task: Task):
    updated_task = await getTaskById(task_id)
    if updated_task:
        conn.execute(tasks.update().values(
            task_title=task.task_title
        ).where(tasks.c.task_id == task_id))
        return True
    return False


async def updateCardTask(task_id: UUID, task: Task):
    card = await getCardById(task.card_id)
    updated_task = await getTaskById(task_id)
    if card and updated_task:
        conn.execute(tasks.update().values(
            card_id=task.card_id
        ).where(tasks.c.task_id == task_id))
        return True
    return False


async def updateCompleted(task_id: UUID, task: Task):
    updated_task = await getTaskById(task_id)
    if updated_task:
        conn.execute(tasks.update().values(
            task_completed=task.task_completed
        ).where(tasks.c.task_id == task_id))
        return True
    return False


async def deleteTask(task_id: UUID):
    task = await getTaskById(task_id)
    if task:
        conn.execute(tasks.delete().where(tasks.c.task_id == task_id))
        return True
    return False
