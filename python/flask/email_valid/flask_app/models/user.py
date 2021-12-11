from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash  # make sure this goes to top of page
import re
# import more classes as necessary

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class User:

    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']

        # list of column values such as first_name, foreign keys, etc.

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # relationship many-1 self.one = None
        # relationship 1-many self.man_list = []

    @classmethod
    def insert_new_user(cls, data):
        # the data often comes from a html form.
        query = "INSERT INTO users (email) VALUES (%(email)s);"
        result = connectToMySQL('db').query_db(query, data)
        return result
        # result is the primary key of the new row

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users;"

        results = connectToMySQL('db').query_db(query)

        row_list = []
        for item in results:
            row_list.append(cls(item))
        return row_list

    @staticmethod
    def validate_user(user):
        is_valid = True  # we assume this is true
        email = user['email']
        if (len(email) == 0 or len(email) > 45 or not EMAIL_REGEX.match(email)):
            flash("Please enter a valid email up to 45 characters.")
            is_valid = False
        return is_valid
