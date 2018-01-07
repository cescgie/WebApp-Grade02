from flask import current_app
from flask_script import Command

from app import db
import json

from app.models.result_models import Result

class InitDbApiCommand(Command):
    #Initialize the database.
    def run(self):
        init_db_api()

def init_db_api():
    #Initialize the database.
    db.drop_all()
    db.create_all()
    import_result()

def import_result():
    #Import RESULT data to the database.
    print('Import RESULT')
    with open('btw17_kerg.json') as json_data:
        daten = json.load(json_data)
        for data in daten:
            insert_result_func(data)
            db.session.commit()
    
def insert_result_func(result_data):
    result = Result(
        nr= result_data['nr'],
        gebiet= result_data['gebiet'],
        gehoert_zu= result_data['gehoert_zu'],
        wahlberechtigte= result_data['wahlberechtigte'],
        waehler= result_data['waehler'],
        ungueltige= result_data['ungueltige'],
        gueltige= result_data['gueltige'],
        christlich_demokratische_union_deutschlands= result_data['christlich_demokratische_union_deutschlands'],
        sozialdemokratische_partei_deutschlands= result_data['sozialdemokratische_partei_deutschlands'],
        die_linke= result_data['die_linke'],
        bundnis_die_grunen= result_data['bundnis_die_grunen'],
        christlich_soziale_union_bayern_ev= result_data['christlich_soziale_union_bayern_ev'],
        freie_demokratische_partei= result_data['freie_demokratische_partei'],
        alternative_fur_deutschland= result_data['alternative_fur_deutschland'],
        piratenpartei_deutschland= result_data['piratenpartei_deutschland'],
        nationaldemokratische_partei_deutschlands= result_data['nationaldemokratische_partei_deutschlands'],
        freie_wahler= result_data['freie_wahler'],
        partei_mensch_umwelt_tierschutz= result_data['partei_mensch_umwelt_tierschutz'],
        okologisch_demokratische_partei= result_data['okologisch_demokratische_partei'],
        okologpartei_fur_arbeit_rechtsstaatisch_demokratische_partei= result_data['okologpartei_fur_arbeit_rechtsstaatisch_demokratische_partei'],
        bayernpartei= result_data['bayernpartei'],
        ab_jetzt_demokratie_durch_volksabstimmung= result_data['ab_jetzt_demokratie_durch_volksabstimmung'],
        partei_der_vernunft= result_data['partei_der_vernunft'],
        marxistisch_leninistische_partei_deutschlands= result_data['marxistisch_leninistische_partei_deutschlands'],
        burgerrechtsbewegung_solidaritat= result_data['burgerrechtsbewegung_solidaritat'],
        sozialistische_gleichheitspartei_vierte_internationale= result_data['sozialistische_gleichheitspartei_vierte_internationale'],
        die_rechte= result_data['die_rechte'],
        allianz_deutscher_demokraten= result_data['allianz_deutscher_demokraten'],
        allianz_fur_menschenrechte_tier_und_naturschutz= result_data['allianz_fur_menschenrechte_tier_und_naturschutz'],
        bergpartei_die_uberpartei= result_data['bergpartei_die_uberpartei'],
        bundnis_grundeinkommen= result_data['bundnis_grundeinkommen'],
        deutsche_kommunistische_partei= result_data['deutsche_kommunistische_partei'], 
        deutsche_mitte= result_data['deutsche_mitte'],
        die_grauen_fur_alle_generationen= result_data['die_grauen_fur_alle_generationen'],
        die_urbane_eine_hiphop_partei= result_data['die_urbane_eine_hiphop_partei'],
        madgeburger_gartenpartei= result_data['madgeburger_gartenpartei'],
        menschliche_welt= result_data['menschliche_welt'],
        partei_der_humanisten= result_data['partei_der_humanisten'],
        partei_fur_gesundheitsforschung= result_data['partei_fur_gesundheitsforschung'],
        v_partei_partei_fur_veranderun_vegetarier_und_veganer= result_data['v_partei_partei_fur_veranderun_vegetarier_und_veganer'],
        bundnis_c_christen_fur_deutschland= result_data['bundnis_c_christen_fur_deutschland'],
        die_einheit= result_data['die_einheit'],
        die_violetten= result_data['die_violetten'],
        familien_partei_deutschlands= result_data['familien_partei_deutschlands'],
        feministische_partei_die_frauen= result_data['feministische_partei_die_frauen'],
        mieterpartei= result_data['mieterpartei'],
        neue_liberale_die_sozialliberalen= result_data['neue_liberale_die_sozialliberalen'],
        unabhangige_fur_burgernahe_demokratie= result_data['unabhangige_fur_burgernahe_demokratie'],
        ubrige= result_data['ubrige']
    )
    db.session.add(result)
    return result