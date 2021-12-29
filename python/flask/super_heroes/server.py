import requests
import os
from flask_app import app
from flask import jsonify, render_template, request

url = "https://superheroapi.com/api/" + \
    os.environ.get('FLASK_APP_API_KEY') + "/search/"


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/searching', methods=['POST'])
def searching():
    query = request.form['query']
    print("url", url+query)
    r = requests.get(url + query)
    return jsonify(r.json())


if __name__ == '__main__':
    app.run(debug=True)
