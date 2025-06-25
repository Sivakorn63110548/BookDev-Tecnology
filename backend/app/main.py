from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from database.Auth import authenticate_user, create_access_token
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import database.db_config as config
import psycopg2
import database.Auth as Auth


app = FastAPI(title=config.APP_SETTINGS["title"])

conn = psycopg2.connect(
    host=config.DATABASE["host"],
    port=config.DATABASE["port"],
    user=config.DATABASE["user"],
    password=config.DATABASE["password"],
    dbname=config.DATABASE["dbname"]
)

origins = [
    '*'
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

class LoginRequest(BaseModel):
    username: str
    password: str

class user_id(BaseModel):
    id: str
    
@app.post("/login")
async def login(req: LoginRequest):
    user = authenticate_user(req.username, req.password)
    if "error" in user:
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    access_token = create_access_token(
        data={"username": user["username"], "id": user["id"], "name": user["name"], "email": user["email"], "profile_img": user["profile_img"]}
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/get_user_detail")
def get_user_detail(req: user_id):
    print(req.id)
    return Auth.get_user_detail(req.id)


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