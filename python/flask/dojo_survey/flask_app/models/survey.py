from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
# import more classes as necessary


class Survey:

    def __init__(self, data):
        self.id = data['id']
        # list of column values such as first_name, foreign keys, etc.
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        # relationship many-1 self.one = None
        # relationship 1-many self.man_list = []

    @classmethod
    def insert_new_survey(cls, data):
        # the data often comes from a html form.
        query = "INSERT INTO surveys (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"
        result = connectToMySQL('db').query_db(query, data)
        return result
        # result is the primary key of the new row

    @classmethod
    def get_survey_by_id(cls, data):
        query = "SELECT * FROM surveys WHERE id = %(id)s"
        result = connectToMySQL('db').query_db(query, data)[0]

        return result

    @staticmethod
    def validate_survey(survey):
        is_valid = True
        if (len(survey['name']) == 0 or len(survey['name']) > 45):
            flash("Please Enter a Name up to 45 characters")
            is_valid = False
        if (survey['location'] == None):
            flash("Please choose a dojo location")
            is_valid = False
        if (survey['language'] == None):
            flash("Please choose a favorite language")
            is_valid = False
        if (len(survey['comment']) > 200):
            flash(
                f"Comments may be up to 200 characters. You used {len(survey['comment'])}.")
            is_valid = False
        return is_valid
