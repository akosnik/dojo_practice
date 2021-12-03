from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello ~~~!'


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<input>')
def hello_input(input):
    return 'Hello, ' + str(input)


@app.route('/repeat/<num>/<message>')
def repeat_input(num, message):
    repeat_message = f'{message} ' * int(num)
    return repeat_message


@app.errorhandler(404)
def no_found(e):
    return "Sorry! No response, try again."


if __name__ == "__main__":
    app.run(debug=True)
