from flask import Blueprint, redirect
from flask_cors import CORS

api_blueprint = Blueprint('api', __name__)
cors = CORS(api_blueprint, resources={r"/api/*": {"origins": "*"}})

from app.models.result_models import Result

# The Home page is accessible to anyone
@api_blueprint.route('/api/json')
def json():
    results = Result.query.order_by(Result.id).all()
    for result in results:
        print(result.gebiet)
    jsonData = '{"name": "Max Mustermann", "hometown": {"name": "Berlin", "id": 123}}'
    return jsonData