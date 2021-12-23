from flask_app import app, session
from flask import redirect, render_template, request
from flask_app.models.recipe import Recipe


@app.route('/recipes')
def recipes():
    if 'user_id' not in session:
        return redirect('/users/login')
    recipes = Recipe.get_all_recipes()
    return render_template('recipes_page.html', recipes=recipes, user_id=session['user_id'])


@app.route('/recipes/<id>')
def recipe(id):
    if 'user_id' not in session:
        return redirect('/users/login')
    data = {
        'id': id
    }
    recipe = Recipe.get_recipe_by_id(data)
    return render_template('recipe_show.html', recipe=recipe)


@app.route('/recipes/new')
def recipe_new():
    if 'user_id' not in session:
        return redirect('/users/login')
    return render_template('recipe_new.html')


@app.route('/recipes/<id>/edit')
def recipe_edit(id):
    if 'user_id' not in session:
        return redirect('/users/login')
    recipe = Recipe.get_recipe_by_id(data)
    return render_template('recipe_edit.html', recipe=recipe)
