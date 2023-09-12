# save this as app.py
from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/api")
def authorize():
    return jsonify({"success": True})


if __name__ == '__main__':
    app.run()
