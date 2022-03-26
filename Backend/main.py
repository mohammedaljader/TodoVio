from fastapi import FastAPI
from routes.todosRoute import todosRoute
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(todosRoute)


origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)