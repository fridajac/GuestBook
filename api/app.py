from flask import Flask, jsonify, request
import json
from repository import PostItemRepository
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hello world'

@app.route('/static/')
def send_static(path):
    return send_from_directory('static', path)

SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL, 
    API_URL, 
    config={
        'app_name': "GuestBook-Flask-REST-Boilerplate"
    }
)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)
# app.register_blueprint(request_api.get_blueprint())

repository = PostItemRepository()
database = "guestbook.db"
conn = repository.create_connection(database)

if conn is not None:
    repository.create_table(conn, "CREATE TABLE IF NOT EXISTS posts(name varchar(255), text varchar (2000))")
else:
    print("Error! Cannot create the database connection")

if __name__ == "__main__":
    app.run(Debug=True)

@app.route('/posts', methods=['GET'])
def get_all():
    results = repository.get_posts(conn)
    post_list = []
    for row in results:
        t = (row[0], row[1])
        post_list.append(t)
    j = json.dumps(post_list)
    return jsonify(post_list), 200

@app.route('/posts', methods=['POST'])
def create_new():
    try:
      data = json.loads(request.data)
    except:
        return create_json_error('Bad request'), 400
    repository.add_post(conn, data)
    return data, 201

def create_json_error(message):
    return jsonify({
        'error': message,
    })
