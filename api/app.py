from hashlib import new
from flask import Flask, jsonify, request
import json
from api.post_item import PostItem

from api.repository import PostItemRepository

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello world'

if __name__ == "__main__":
    app.run(Debug=True)

repository = PostItemRepository()

@app.route('/posts', methods=['GET'])
def get_all():
    return jsonify([post_item.serialize() for post_item in repository.get_posts()])

@app.route('/posts', methods=['POST'])
def create_new():
    data = json.loads(request.data)
    repository.add_post(PostItem(data['name'], data['text']))
    return data
