from flask_app import app, session
from flask import redirect, render_template, request
from flask_app.models.user import User
from flask_bcrypt import Bcrypt  # password encryption: pipenv install flask-bcrypt

bcrypt = Bcrypt(app)


@app.route('/')
def home():
    if 'user_id' not in session:
        return redirect('/users/login')
    return redirect(f"/recipes")

# LOGIN


@app.route('/users/login')
def login():
    if 'user_id' not in session:
        return render_template('login.html')
    return redirect(f'/recipes')


@app.post('/users/login/check')
def login_check():
    data = {
        'login_input': request.form['login_input'],
        'password': request.form['password']
    }
    valid_login = User.login(data)
    if valid_login:
        session['user_id'] = valid_login.id
        session['username'] = valid_login.username
    return redirect('/users/login')

# LOGOUT


@app.route('/users/logout')
def logout():
    session.clear()
    return redirect('/users/login')

# REGISTER


@app.route('/users/new')
def new_user():
    if 'user_id' not in session:
        return render_template('register.html')
    return redirect(f'/users/{session["user_id"]}')


@app.post('/users/create')
def create_user():
    if not User.is_valid_new_user(request.form):
        return redirect(f'/users/new')

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        'username': request.form['username'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': pw_hash
    }
    result = User.insert_new_user(data)
    return redirect('/users/login')

# GET USER


@app.route('/users/<user_id>')
def get_user(user_id):
    if 'user_id' not in session:
        return redirect('/users/login')
    return f"HELLO {user_id}"
    # data = {
    #     'id': user_id
    # }
    # user = User.get_user_by_id(data)
    # return render_template('get_user.html', user=user)

# @app.route('/users/delete/<num>')
# def remove_user(num):
#     data = {
#         'id': num
#     }
#     User.delete_user(data)
#     return redirect('/users/view')


# @app.route('/users/edit/<num>')
# def edit_user(num):
#     data = {
#         'id': num
#     }
#     results = User.get_user(data)
#     return render_template('edit_user.html', user=results[0])


# @app.post('/users/edited/<num>')
# def edited_user(num):

#     if not User.is_valid_new_user(request.form):
#         return redirect(f'/users/edit/{num}')

#     data = {
#         'id': num,
#         'first_name': request.form['first_name'],
#         'last_name': request.form['last_name'],
#         'email': request.form['email']
#     }
#     User.edit_user(data)
#     return redirect(f'/users/{num}')


# - RESTful routing
#     - CREATE
#         - `/table_name/new` - GET display form
#         - `/table_name/create` - POST function
#     - READ MANY
#         - `/table_name` - GET
#     - READ ONE
#         - `/table_name/id` - GET display single rows data
#     - UPDATE
#         - `/table_name/id/edit` - GET display the form
#         - `/table_name/id/update` - POST function
#     - DESTROY
#         - `/table_name/id/destroy` - GET delete the row and redirect
