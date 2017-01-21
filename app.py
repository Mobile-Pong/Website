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

    cur.execute('UPDATE player_info \
            SET mot_x = %s, mot_y = %s, mot_z = %s, ori_x = %s, ori_y = %s, ori_z = %s \
            WHERE player_id = %s \
        ',
        (motion[0], motion[1], motion[2], orientation[0], orientation[1], orientation[2], playerID)
    )
    conn.commit()
    conn.close()

@app.route('/getData', methods=['POST'])
def getData():
    data = json.loads(request.data.decode())

    conn = db_connection()
    cur = db_cursor(conn)

    cur.execute('SELECT * FROM player_info WHERE player_id = %s;', (data['player_id'], ))
    return_val = dict(cur.fetchone())
    conn.close()

    return json.dumps(return_val)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
