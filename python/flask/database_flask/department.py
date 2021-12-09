from mysqlconnection import connectToMySQL


class Department:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_departments(cls):
        query = "SELECT * FROM departments;"

        results = connectToMySQL('business_schema').query_db(query)

        departments = []
        for item in results:
            departments.append(cls(item))
        return departments

    @classmethod
    def create_new_department(cls, data):
        query = "INSERT INTO departments (name, location) VALUES (%(name)s, %(location)s);"
        result = connectToMySQL('business_schema').query_db(query, data)
        return result
