from flask_app import app
from flask_app.controllers import departments


@app.errorhandler(404)
def not_found(e):
    return '404d! Must have taken a wrong turn at Albuquerque'


if __name__ == '__main__':
    app.run(debug=True)
