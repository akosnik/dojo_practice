from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return "Welcome to page"


@app.route('/play')
def default_play():
    return render_template('index.html', times=3)


@app.route('/play/<times>')
def times_play(times):
    return render_template('index.html', times=int(times))


@app.route('/play/<times>/<color>')
def color_times_play(times, color):
    return render_template('index.html', times=int(times), color=str(color))


@app.errorhandler(404)
def not_found(e):
    return "404'd! Must have taken a wrong turn at Albuquerque"


if __name__ == "__main__":
    app.run(debug=True)
