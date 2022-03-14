import json
from post_item import PostItem
import sqlite3
from sqlite3 import Error

class PostItemRepository:

  def add_post(self, conn):
    c = conn.cursor()
    c.execute("INSERT INTO posts(name,text) VALUES ('Alice', 'God mat')")
  
  def get_posts(self, conn):
    c = conn.cursor()
    c.execute("SELECT name, text FROM posts;")
    result = c.fetchall()
    return result

  def create_connection(self, db_file):
    conn = None
    try:
      conn = sqlite3.connect(db_file, check_same_thread=False)
      print(sqlite3.version)
    except Error as e:
      print(e)
    return conn

  def create_table(self, conn, create_table_sql):
    try:
      c = conn.cursor()
      c.execute(create_table_sql)
    except Error as e:
      print(e)