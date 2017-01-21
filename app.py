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

    playerID = request.args.get('player_id', '')
    mot_x = request.args.get('mot_x', '')
    mot_y = request.args.get('mot_y', '')
    mot_z = request.args.get('mot_z', '')
    ori_x = request.args.get('ori_x', '')
    ori_y = request.args.get('ori_y', '')
    ori_z = request.args.get('ori_z', '')

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
