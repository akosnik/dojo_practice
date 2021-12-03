from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<input>')
def hello_input(input):
    return 'Hello, ' + input


@app.route('/repeat/<num>/<message>')
def repeat_input(num, message):
    return f'{message * int(num)}'


if __name__ == "__main__":
    app.run(debug=True)
