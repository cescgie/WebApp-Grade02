from flask import current_app
from flask_script import Command

from app import db
import json

from app.models.result_models import Result

class ImportResultCommand(Command):
    """ Initialize the database."""

    def run(self):
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
    