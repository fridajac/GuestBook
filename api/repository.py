import json
from post_item import PostItem
import sqlite3
from sqlite3 import Error

class PostItemRepository:

  def add_post(self, conn, data):
    c = conn.cursor()
    c.execute("INSERT INTO posts(name, text) VALUES ('"+data.get('name')+"', '"+data.get('text')+"');")
    conn.commit()

  def get_posts(self, conn):
    c = conn.cursor()
    c.execute("SELECT name, text FROM posts;")
    conn.commit()
    result = c.fetchall()
    return result

  """ def delete_posts(self, conn):
    c = conn.cursor()
    c.execute("DELETE FROM posts")
     """
  def create_connection(self, db_file):
    try:
      conn = sqlite3.connect(db_file, check_same_thread=False)
    except Error as e:
      print(e)
    return conn

  def create_table(self, conn, create_table_sql):
    try:
      c = conn.cursor()
      c.execute(create_table_sql)
    except Error as e:
      print(e)