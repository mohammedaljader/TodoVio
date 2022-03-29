from fastapi import FastAPI
from routes.card import card
from routes.task import task
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(card)
app.include_router(task)


origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
