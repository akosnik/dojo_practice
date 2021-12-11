from flask_app import app
from flask import render_template, redirect, request  # update as needed
# more model/class imports may be needed
from flask_app.models.user import User


@app.route('/')  # basic home route
def form_email():
    return render_template('create_email.html')  # basic homepage setup


@app.post('/insert/email')
def insert_email():
    if not User.validate_user(request.form):
        return redirect('/')

    data = {
        'email': request.form['email']
    }

    User.insert_new_user(data)
    return redirect('/view-all/user')


@app.route('/view-all/user')
def view_all_email():
    user_list = User.get_all_users()
    return render_template('view_emails.html', users=user_list)
