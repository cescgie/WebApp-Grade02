from flask import Blueprint, redirect
from flask_cors import CORS

api_blueprint = Blueprint('api', __name__)
cors = CORS(api_blueprint, resources={r"/api/*": {"origins": "*"}})

from app.models.result_models import Result

from flask_jsonpify import jsonify

nr = []
for x in range(501, 517):
    nr.append(x)
    
# Format to valid result
def formatResult(dataRow):
    data = {}
    for key in dataRow.keys():
        if(key != '_sa_instance_state'):
            data[key] = dataRow[key]
    return data

# Get total result        
@api_blueprint.route('/api/result/all')
def getAllResult():
    result = Result.query.filter(Result.nr == 500).first()
    dicti = result.__dict__
    data = formatResult(dicti)
    return jsonify(data)

# Get result from each bundesland
@api_blueprint.route('/api/result/bundesland')
def getBundesland():
    land = []
    for x in nr:
        result = Result.query.filter(Result.nr == x).first()
        dicti = result.__dict__
        data = formatResult(dicti)
        land.append(data)
    return jsonify(land)