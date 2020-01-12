import psycopg2
import sys
import json
from  flask import Flask,render_template
from flask import jsonify
from flask_cors import CORS
import avocadoConnect
from avocadoConnect import avocadolist

app = Flask(__name__)
CORS(app)

@app.route('/')
def rendervis():
    return render_template("index.html", avocadolist=avocadolist)

if __name__ == '__main__':
    app.run(debug=True)