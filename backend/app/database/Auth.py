from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from database.db import get_connection, get_cursor_dict
import jwt
import os
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 5

def authenticate_user(username: str, password: str):
    try:
        conn = get_connection()
        with conn:
            with get_cursor_dict(conn) as cur:
                query = """
                    SELECT id, name, email, username, profile_img 
                    FROM users 
                    WHERE username = %s AND password = %s AND type = 'DEV';
                """
                cur.execute(query, (username, password))
                user = cur.fetchone()
                if not user:
                    return {"error": "Invalid username or password"}
                return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def user_authen():
    try:
        conn = get_connection()
        with conn:
            with get_cursor_dict(conn) as cur:
                cur.execute("SELECT id, name, email, username, profile_img FROM users WHERE type = 'DEV';")
                users = cur.fetchone()
        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
def get_user_detail(id: str):
    try:
        conn = get_connection()
        with conn:
            with get_cursor_dict(conn) as cur:
                cur.execute("""
                    SELECT users.id, users.name, users.email, users.username, users.profile_img, user_details.*
                    FROM users 
                    LEFT JOIN user_details ON users.id = user_details.user_id 
                    WHERE users.id = %s
                """, (id,))
                user = cur.fetchone()
                if not user:
                    raise HTTPException(status_code=404, detail="User not found")
            return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
