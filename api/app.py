from hashlib import new
from flask import Flask, jsonify, request
import json
from post_item import PostItem

from repository import PostItemRepository

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello world'

repository = PostItemRepository()
print(repository)
database = "guestbook.db"
conn = repository.create_connection(database)

if conn is not None:
    repository.create_table(conn, "CREATE TABLE IF NOT EXISTS posts( name varchar(255), text varchar (2000))")
else:
    print("Error! Cannot create the database connection")

if __name__ == "__main__":
    app.run(Debug=True)

@app.route('/posts', methods=['GET'])
def get_all():
    return jsonify([post_item.serialize() for post_item in repository.get_posts(conn)])

@app.route('/posts', methods=['POST'])
def create_new():
    data = json.loads(request.data)
    repository.add_post(conn)
    return data
