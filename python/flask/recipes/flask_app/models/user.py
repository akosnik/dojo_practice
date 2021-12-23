from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
from flask_app import app
from flask_bcrypt import Bcrypt
# MySQL connector: pipenv install pymysql
# password encryption: pipenv install flask-bcrypt
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
INVALIDS = re.compile(r'[^0-9a-zA-Z!@#$%^&*()?._-]')


class User:

    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.email = data['email']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.recipes = []
        self.contacts = []

    @classmethod
    def insert_new_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, username) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(username)s);"
        result = connectToMySQL().query_db(query, data)
        return result

# =======================
    # GET UNIQUE USER
# =======================

    @classmethod
    def get_user_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = (%(id)s)"
        results = connectToMySQL().query_db(query, data)
        if len(results) < 1:
            return None
        result = cls(results[0])
        return result

    @classmethod
    def get_user_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = (%(email)s)"
        results = connectToMySQL().query_db(query, data)
        if len(results) < 1:
            return None
        result = cls(results[0])
        return result

    @classmethod
    def get_user_by_username(cls, data):
        query = "SELECT * FROM users WHERE username = (%(username)s)"
        results = connectToMySQL().query_db(query, data)
        if len(results) < 1:
            return None
        result = cls(results[0])
        return result

# =======================
    #  VALIDATION
# =======================

    @staticmethod
    def is_valid_first_name(name):
        is_valid = True
        if len(name) < 2:
            flash("Names must be at least 2 characters.", "first_name")
            is_valid = False
        if len(name) > 45:
            flash("Names must be maximum 45 characters.", "first_name")
            is_valid = False
        return is_valid

    @staticmethod
    def is_valid_last_name(name):
        is_valid = True
        if len(name) < 2:
            flash("Names must be at least 2 characters.", "last_name")
            is_valid = False
        if len(name) > 45:
            flash("Names must be maximum 45 characters.", "last_name")
            is_valid = False
        return is_valid

    @staticmethod
    def is_valid_email(email, login=False):
        if not EMAIL_REGEX.match(email):
            if not login:
                flash("Invalid email address.", "email")
            return False
        return True

    @staticmethod
    def is_existing_email(email, login=False):
        data = {
            'email': email
        }
        if User.get_user_by_email(data) == None:
            return False
        if not login:
            flash("Email already exists.", "email")
        return True

    @staticmethod
    def is_valid_username(username, login=False):
        if len(username) < 2:
            if not login:
                flash("Username must be at least 2 characters.", "username")
            return False
        if len(username) > 16:
            if not login:
                flash("Username must be at most 16 characters.", "username")
        if INVALIDS.match(username):
            if not login:
                flash(
                    "Only alphanumeric or !@#$%^&*()?._- characters allowed.", "username")
        return True

    @staticmethod
    def is_existing_username(username, login=False):
        data = {
            'username': username
        }
        if User.get_user_by_username(data) == None:
            return False
        if not login:
            flash("Username already exists.", "username")
        return True

    @staticmethod
    def is_valid_password(password, login=False):
        is_valid = True
        if len(password) < 8 or len(password) > 32:
            if not login:
                flash("be 8-32 characters", "password")
            is_valid = False

        if re.search("[a-z]", password) == None:
            if not login:
                flash("contain a lowercase letter", "password")
            is_valid = False

        if re.search("[A-Z]", password) == None:
            if not login:
                flash("contain at an uppercase letter", "password")
            is_valid = False

        if re.search("[0-9]", password) == None:
            if not login:
                flash("contain a number", "password")
            is_valid = False

        if re.search("[!@#$%^&*()?._-]", password) == None:
            if not login:
                flash(
                    "contain a special character ex: !@#$%^&*()?._-", "password")
            is_valid = False

        if INVALIDS.match(password):
            if not login:
                flash(
                    "only be alphanumeric or !@#$%^&*()?._- characters", "password")
            is_valid = False
        return is_valid

    @staticmethod
    def is_matching_password(confirm, password):
        if password != confirm:
            flash("Passwords do not match.", "confirm")
            return False
        return True

    @staticmethod
    def is_valid_new_user(user):
        is_valid = True

        if not User.is_valid_first_name(user['first_name']):
            is_valid = False
        if not User.is_valid_last_name(user['last_name']):
            is_valid = False
        if not User.is_valid_email(user['email']):
            is_valid = False
        if User.is_existing_email(user['email']):
            is_valid = False
        if not User.is_valid_username(user['username']):
            is_valid = False
        if User.is_existing_username(user['username']):
            is_valid = False
        if not User.is_valid_password(user['password']):
            is_valid = False
        if not User.is_matching_password(user['confirm_password'], user['password']):
            is_valid = False

        return is_valid

    @staticmethod
    def login(data):
        user = None
        if not User.is_valid_password(data['password'], login=True):
            flash("Invalid Login/Password", "login")
            return False
        if not User.is_valid_email(data['login_input'], login=True):
            if not User.is_valid_username(data['login_input'], login=True):
                flash("Invalid Login/Password", "login")
                return False
            data['username'] = data['login_input']
            user = User.get_user_by_username(data)
        else:
            data['email'] = data['login_input']
            user = User.get_user_by_email(data)
        if user == None:
            flash("Invalid Login/Password", "login")
            return False
        if not bcrypt.check_password_hash(user.password, data['password']):
            flash("Invalid Login/Password", "login")
            return False
        return user
