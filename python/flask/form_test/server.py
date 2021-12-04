from flask import Flask, render_template
app = Flask(__name__)


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print("request.form")
    return redirect('/')


@app.errorhandler(404)
def not_found(e):
    return '404d! Must have taken a wrong turn at Albuquerque'


if __name__ == '__main__':
    app.run(debug=True)
