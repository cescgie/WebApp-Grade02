from flask import current_app
from flask_script import Command

from app import db
import json

from app.models.result_models import Result

class InitDbApiCommand(Command):
    """ Initialize the database."""
    def run(self):
        init_db_api()

def init_db_api():
    """ Initialize the database."""
    db.drop_all()
    db.create_all()
    import_result()

def import_result():
    """ Import RESULT data to the database."""
    print('Import RESULT')
    with open('btw17_kerg.json') as json_data:
        daten = json.load(json_data)
        for data in daten:
            # Check if data with nr = data['nr'] already inserted
            # If true, skip
            # If false, insert to table results
            check_result = Result.query.filter(Result.nr == data['nr']).first()
            if not check_result:
                print('insert');
    