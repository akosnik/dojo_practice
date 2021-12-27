from flask_app import app
from flask import redirect, render_template, request, jsonify
from flask_app.models.user import User


@app.route('/')
def view_users():
    my_users = User.get_all_users()
    return render_template('index.html', users=my_users)


@app.route('/create', methods=['POST'])
def create():
    User.insert_new_user(request.form)
    my_users = User.get_all_users()
    return redirect('/')
