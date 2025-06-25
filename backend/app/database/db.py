# db.py
import psycopg2
from psycopg2.extras import RealDictCursor
import database.db_config as config

def get_connection():
    conn = psycopg2.connect(
        host=config.DATABASE["host"],
        port=config.DATABASE["port"],
        user=config.DATABASE["user"],
        password=config.DATABASE["password"],
        dbname=config.DATABASE["dbname"]
    )
    return conn

def get_cursor_dict(conn):
    return conn.cursor(cursor_factory=RealDictCursor)
