from flask import Flask, render_template, redirect, request
from department import Department

app = Flask(__name__)


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


@app.errorhandler(404)
def not_found(e):
    return '404d! Must have taken a wrong turn at Albuquerque'


if __name__ == '__main__':
    app.run(debug=True)
