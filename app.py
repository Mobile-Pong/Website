from flask import Flask, render_template, request
from db_connector import db_connection, db_cursor
import json
import os
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/pushData', methods=['POST'])
def pushData():
    conn = db_connection()
    cur = db_cursor(conn)

    data = json.loads(request.data.decode())

    playerID = data['player_id']
    mot_x = data['mot_x']
    mot_y = data['mot_y']
    mot_z = data['mot_z']
    ori_x = data['ori_x']
    ori_y = data['ori_y']
    ori_z = data['ori_z']

    cur.execute('UPDATE player_info \
            SET mot_x = %s, mot_y = %s, mot_z = %s, ori_x = %s, ori_y = %s, ori_z = %s \
            WHERE player_id = %s \
        ',
        (mot_x, mot_y, mot_z, ori_x, ori_y, ori_z, playerID)
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
