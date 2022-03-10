from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello world'

if __name__ == "__main__":
    app.run(Debug=True)

posts = [
    {'name': 'Frida',
'text': 'Allt var bra tack'},
{'name': 'Victor',
'text': 'Allt sög'}
]

@app.route('/posts/all', methods=['GET'])
def get_all():
    return jsonify(posts)

@app.route('/posts', methods=['POST'])
def create_new():
    post = {
        'name': 'Sara',
        'text': 'Jag kommer gärna tillbaka'
    }
    posts.append(post)
    return jsonify({'post': post}), 201