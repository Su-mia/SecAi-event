from flask import Flask, jsonify
from leaderboard import LeaderBoard
import json

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/api/leaderboard', methods=['GET'])
def leaderboard():
    leaderboard = LeaderBoard()
    return jsonify(leaderboard.get_kaggle_leaderboard())


if __name__ == '__main__':
    app.run(debug=True)