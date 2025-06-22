from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import db_config as config
import psycopg2

app = FastAPI(title=config.APP_SETTINGS["title"])

conn = psycopg2.connect(
    host=config.DATABASE["host"],
    port=config.DATABASE["port"],
    user=config.DATABASE["user"],
    password=config.DATABASE["password"],
    dbname=config.DATABASE["dbname"]
)

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/dbtest")
def db_test():
    try:
        with psycopg2.connect(**config.DATABASE) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT version();")
                version = cur.fetchone()[0]
        return {"PostgreSQL Version": version}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat")
def chat(req: ChatRequest):
    msg = req.message.strip().lower()
    if "reset password" in msg:
        reply = "You can reset your password in Settings > Account Security."
    elif "hello" in msg:
        reply = "Hi there! How can I help you today?"
    else:
        reply = f"I'm not sure how to respond to: '{req.message}'"
    return {"reply": reply}

@app.get("/")
def init():
    return {'Hellp DB_tools byBook'}