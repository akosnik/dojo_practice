from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Ahoy-hoy!'


@app.route('/multiply/<x>/<y>')
def multiply_two_numbers(x, y):
    return str(f'The result of {x} * {y} = {int(x)*int(y)}')


# @app.route('/divide/<x>/<y>')
# def multiply_two_numbers(x, y):
#     return x / y


if __name__ == '__main__':
    app.run(debug=True)
