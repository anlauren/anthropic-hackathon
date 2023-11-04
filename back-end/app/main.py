"""
main.py
"""

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import users

# Define application
app = FastAPI(
    title="Hackaton API",
    description="API for Hackaton",
    version="0.1"
)

origins = [os.environ.get("ALLOWED_ORIGINS")]

app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    expose_headers=["*"]
)

# Routers
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/")
async def health_check():
    return {"message": "Working normally"}
