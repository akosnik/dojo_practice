from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.department import Department


@app.route('/')
def index():
    departments = Department.get_all_departments()
    return render_template('index.html', departments=departments)


@app.route('/departments/create', methods=['POST'])
def created_department():
    print(request.form)
    data = {
        'name': request.form['department_name'],
        'location': request.form['department_location']
    }
    Department.create_new_department(data)
    return redirect('/')
