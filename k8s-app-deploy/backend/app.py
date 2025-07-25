from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route("/api")
def hello():
    return jsonify(message="Its working!", db=os.getenv("DB_NAME"))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
