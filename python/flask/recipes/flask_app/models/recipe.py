from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app


class Recipe:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.sub30 = data['sub30']
        self.date_made = data['date_made']
        self.description = data['description']
        self.instructions = data['instructions']
        self.user_id = data['user_id']
        if 'date_made' in data:
            self.date_made = data['date_made']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def insert_new_user(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, sub30, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(sub30)s, %(user_id)s);"
        result = connectToMySQL().query_db(query, data)
        return result

# =======================
      # GET UNIQUE
# =======================

    @classmethod
    def get_recipe_by_id(cls, data):
        query = "SELECT * FROM recipes WHERE id = (%(id)s)"
        results = connectToMySQL().query_db(query, data)
        if len(results) < 1:
            return None

        result = cls(results[0])
        return result

    @classmethod
    def get_all_recipes(cls):
        query = "SELECT * FROM recipes"
        results = connectToMySQL().query_db(query)
        recipes = []
        for result in results:
            recipes.append(cls(result))
        return recipes
