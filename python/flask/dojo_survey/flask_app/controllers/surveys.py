from flask_app import app
from flask import render_template, redirect, request  # update as needed
# more model/class imports may be needed
from flask_app.models.survey import Survey


@app.route('/')  # basic home route
def view_home():
    return render_template('index.html')  # basic homepage setup


@app.post('/survey/handle')
def handle_survey():
    data = {
        'name': request.form['name'],
        'location': request.form['location'],
        'language': request.form['language'],
        'comment': request.form['comment']
    }

    if not Survey.validate_survey(data):
        return redirect('/')

    survey_id = Survey.insert_new_survey(data)
    return redirect(f'/survey/view/{survey_id}')


@app.route('/survey/view/<survey_id>')
def view_survey(survey_id):
    data = {
        'id': survey_id
    }
    survey = Survey.get_survey_by_id(data)
    return render_template('view_survey.html', survey=survey)
