from uuid import UUID

from fastapi import APIRouter, HTTPException
from schemas.task import Task
from Service.taskService import getAllTasks, getTaskById, addTask, updateTask, deleteTask, updateCompleted

task = APIRouter()


@task.get("/api/tasks")
async def get_all_tasks():
    response = await getAllTasks()
    return response


@task.get("/api/task/{task_id}")
async def get_task_by_id(task_id: UUID):
    response = await getTaskById(task_id)
    return response


@task.post("/api/task")
async def add_card(taskModel: Task):
    newTask = await addTask(taskModel)
    if newTask:
        return "Task added successfully!"
    raise HTTPException(400, "Something went wrong")


@task.put("/api/task/{task_id}")
async def update_card(task_id: UUID, taskModel: Task):
    updatedTask = await updateTask(task_id, taskModel)
    if updatedTask:
        return "Task updated successfully!"
    raise HTTPException(404, f"There is no task with the id {task_id}")


@task.put("/api/task/completed/{task_id}")
async def update_card(task_id: UUID, taskModel: Task):
    updatedTask = await updateCompleted(task_id, taskModel)
    if updatedTask:
        return "Task_completed updated successfully!"
    raise HTTPException(404, f"There is no task with the id {task_id}")


@task.delete("/api/task/{task_id}")
async def delete_task(task_id: UUID):
    result = await deleteTask(task_id)
    if result:
        return "Task deleted successfully!"
    raise HTTPException(404, f"There is no card with the id {task_id}")
