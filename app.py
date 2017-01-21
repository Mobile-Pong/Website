from flask import Flask, render_template, request
from db_connector import db_connection, db_cursor
import json
import os
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/pushData', methods=['GET'])
def pushData():
    conn = db_connection()
    cur = db_cursor(conn)

    playerID = request.args.get('playerID', '')
    motion = request.args.get('motion', '')
    orientation = request.args.get('orientation', '')

@app.route('/getData', methods=['POST'])
def getData():
    return json.dumps({'Status': 'Success'})


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
