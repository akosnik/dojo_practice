# mySQL connector: pipenv install pymysql
from flask_app.config.mysqlconnection import connectToMySQL
import re  # Regex for validation
from flask import flash  # validation messaging: import session in __init__.py


class User:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        # list of column values such as first_name, foreign keys, etc.

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # relationship many-1 self.one = None
        # relationship 1-many self.man_list = []

    @staticmethod
    def validate_user(user):
        is_valid = True
        # user is the request.form.
        # A dictionary containing key value pairs set up in the HTML form

        # EXAMPLE 1: Check for existing entry in table
        # email = user['email']
        # query = "SELECT email FROM users WHERE email = (%(email)s)"
        # results = connectToMySQL('db').query_db(query, user)
        # print(results)
        # if results == []:
        #     flash("Email already exists")
        #     is_valid = False

        # EXAMPLE 2: Check for minimum length of form element
        # if len(burger['name']) < 3:
        #    flash("Name must be at least 3 characters.")
        #    is_valid = False
        return is_valid

    @classmethod
    def insert_new_user(cls, data):
        # fix function name, table, column names, value keys, and db name
        # The values are keys in the data dictionary. The keys should match up to the column names
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s);"
        result = connectToMySQL().query_db(query, data)
        return result
        # result is the primary key of the new row

    @classmethod
    def get_user_by_id(cls, data):
        # fix function name, table, and db name
        query = "SELECT * FROM users WHERE id = (%(id)s)"
        results = connectToMySQL().query_db(query, data)
        # If db is setup correctly, results should return an array with one result

        result = cls(results[0])
        return result

    @classmethod
    def get_all_users(cls):
        # fix function name, table, and db name
        query = "SELECT * FROM users;"

        results = connectToMySQL().query_db(query)

        row_list = []
        for item in results:
            row_list.append(cls(item))
        return row_list

    @classmethod
    def update_user(cls, data):
        query = "UPDATE users SET (first_name, last_name, email) = (%(first_name)s, %(last_name)s, %(email)s) WHERE id = %(id)s"
        result = connectToMySQL().query_db(query, data)
        return result

    @classmethod
    def delete_user(cls, data):
        # fix function name, table, and db name
        query = "DELETE FROM users WHERE id = %(id)s"
        result = connectToMySQL().query_db(query, data)
        return result
