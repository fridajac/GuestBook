from hashlib import new
from flask import Flask, jsonify, request
import json
from PostItem import PostItem

from PostItemRepository import PostItemRepository

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello world'

if __name__ == "__main__":
    app.run(Debug=True)

repository = PostItemRepository()

@app.route('/posts', methods=['GET'])
def get_all():
    return jsonify([postItem.serialize() for postItem in repository.getPosts()])

@app.route('/posts', methods=['POST'])
def create_new():
    data = json.loads(request.data)
    repository.addPost(PostItem(data['name'], data['text']))
    return data
