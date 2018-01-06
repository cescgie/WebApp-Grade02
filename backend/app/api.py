from flask import Blueprint, redirect
from flask_cors import CORS

api_blueprint = Blueprint('api', __name__)
cors = CORS(api_blueprint, resources={r"/api/*": {"origins": "*"}})

# The Home page is accessible to anyone
@api_blueprint.route('/api/json')
def json():
    jsonData = '{"name": "Max Mustermann", "hometown": {"name": "Berlin", "id": 123}}'
    return jsonData