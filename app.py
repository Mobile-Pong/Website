from flask import Flask, render_template, request
from db_connector import db_connection, db_cursor
import json
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


# @app.route('/', methods=['GET'])
# def downloadList():
#     conn = db_connection()
#     cur = db_cursor(conn)
#
#

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
