from flask import current_app
from flask_script import Command

from app import db

class ImportResultCommand(Command):
    """ Initialize the database."""

    def run(self):
        import_result()

def import_result():
    """ Import RESULT data to the database."""
    print('Import RESULT')
    