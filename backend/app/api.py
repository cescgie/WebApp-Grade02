from flask import Blueprint, redirect
from flask_cors import CORS

api_blueprint = Blueprint('api', __name__)
cors = CORS(api_blueprint, resources={r"/api/*": {"origins": "*"}})

from app.models.result_models import Result

from flask_jsonpify import jsonify

# Get total result        
@api_blueprint.route('/api/result/all')
def getAllResult():
    result = Result.query.filter(Result.gehoert_zu == 100).first()
    dicti = result.__dict__
    data = formatResult(dicti)
    return jsonify(data)

# Get result from each bundesland
@api_blueprint.route('/api/result/bundesland')
def getBundesland():
    result = Result.query.filter(Result.gehoert_zu == 99).all()
    land = []
    for x in result:
        dicti = x.__dict__
        data = formatResult(dicti)
        land.append(data)
    return jsonify(land)

# Get all parties        
@api_blueprint.route('/api/parties/all')
def getAllParties():
    result = Result.query.filter(Result.nr == 100).first()
    dicti = result.__dict__
    data = formatResultParties(dicti)
    return jsonify(data)

# Get all wahlkreis from one bundesland       
@api_blueprint.route('/api/wahlkreis/all/<nr>')
def getAllWahlkreis(nr):
    result = Result.query.filter(Result.gehoert_zu == nr).all()
    wahlkreis = []
    for x in result:
        dicti = x.__dict__
        data = formatResult(dicti)
        wahlkreis.append(data)
    return jsonify(wahlkreis)

# Get result from one area by nr    
@api_blueprint.route('/api/result/area/<nr>')
def getResultArea(nr):
    result = Result.query.filter(Result.nr == nr).first()
    dicti = result.__dict__
    data = formatResult(dicti)
    return jsonify(data)

# Format to valid result all parties
def formatResultParties(dataRow):
    parties = []
    for key in dataRow.keys():
        if(key != '_sa_instance_state'
        and key != 'ubrige'
        and key != 'gueltige' 
        and key != 'id' 
        and key != 'nr' 
        and key != 'gebiet' 
        and key != 'gehoert_zu' 
        and key != 'wahlberechtigte' 
        and key != 'waehler' 
        and key != 'ungueltige' 
        and key != 'gueltige'
        and key != 'demokratie_bewegung'
        and key != 'unabhangige_fur_burgernahe_demokratie'
        ):  
            parties.append(key)
    return parties

# Format to valid result
def formatResult(dataRow):
    data = {}
    for key in dataRow.keys():
        if(key != '_sa_instance_state' ):
            data[key] = dataRow[key]
    return data