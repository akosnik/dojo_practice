from flask import Flask, render_template, request, redirect, session
from random import randint
app = Flask(__name__)
app.secret_key = 'tbatstdgagitwamwtbatmrobtjmstjtbtctcbtjbastfb'

min = 1
max = 20


@app.route('/')
def index():
    if 'setup' not in session:
        return redirect('/setup')
    return render_template('index.html', min=min, max=max, hi_vis=session['hi_vis'], lo_vis=session['lo_vis'], form_color=session['form_color'])


@app.route('/guess', methods=['POST'])
def guess():
    target = int(session['target'])
    guess = int(request.form['num'])
    session['guess_count'] += 1
    print('target', target, 'guess', guess)
    if guess > target:
        session['hi_vis'] = 'visible'
        session['lo_vis'] = 'hidden'
        session['form_color'] = 'pink'
    elif guess < target:
        session['hi_vis'] = 'hidden'
        session['lo_vis'] = 'visible'
        session['form_color'] = 'lightblue'
    else:
        return redirect('/correct', guess)
    print('form: ', request.form)
    return redirect('/')


@app.route('/setup')
def setup():
    session['target'] = randint(1, 10)
    session['guess_count'] = 0
    session['hi_vis'] = 'hidden'
    session['lo_vis'] = 'hidden'
    session['form_color'] = 'white'
    session['setup'] = True
    print(session['target'])
    return redirect('/')


@app.route('/correct')
def correct():
    return render_template('correct.html', min=min, max=max, guess=guess)


@app.errorhandler(404)
def not_found(e):
    return '404d! Must have taken a wrong turn at Albuquerque'


if __name__ == '__main__':
    app.run(debug=True)
