from app import db


# Define the Result data model
class Result(db.Model):
    __tablename__ = 'results'
    id = db.Column(db.Integer(), primary_key=True)
    nr = db.Column(db.Integer())
    gebiet = db.Column(db.String(255), server_default=u'')
    gehoert_zu = db.Column(db.Integer())
    wahlberechtigte = db.Column(db.Integer())
    waehler = db.Column(db.Integer())
    ungueltige = db.Column(db.Integer())
    gueltige = db.Column(db.Integer())
    christlich_demokratische_union_deutschlands = db.Column(db.Integer())
    sozialdemokratische_partei_deutschlands = db.Column(db.Integer())
    die_linke = db.Column(db.Integer())
    bundnis_die_grunen = db.Column(db.Integer())
    christlich_soziale_union_bayern_ev = db.Column(db.Integer())
    freie_demokratische_partei = db.Column(db.Integer())
    alternative_fur_deutschland = db.Column(db.Integer())
    piratenpartei_deutschland = db.Column(db.Integer())
    nationaldemokratische_partei_deutschlands = db.Column(db.Integer())
    freie_wahler = db.Column(db.Integer())
    partei_mensch_umwelt_tierschutz = db.Column(db.Integer())
    okologisch_demokratische_partei= db.Column(db.Integer())
    okologpartei_fur_arbeit_rechtsstaatisch_demokratische_partei= db.Column(db.Integer())
    bayernpartei = db.Column(db.Integer())
    ab_jetzt_demokratie_durch_volksabstimmung = db.Column(db.Integer())
    partei_der_vernunft = db.Column(db.Integer())
    marxistisch_leninistische_partei_deutschlands = db.Column(db.Integer())
    burgerrechtsbewegung_solidaritat = db.Column(db.Integer())
    sozialistische_gleichheitspartei_vierte_internationale = db.Column(db.Integer())
    die_rechte = db.Column(db.Integer())
    allianz_deutscher_demokraten = db.Column(db.Integer())
    allianz_fur_menschenrechte_tier_und_naturschutz = db.Column(db.Integer())
    bergpartei_die_uberpartei = db.Column(db.Integer())
    bundnis_grundeinkommen = db.Column(db.Integer())
    demokratie_bewegung = db.Column(db.Integer())
    deutsche_kommunistische_partei = db.Column(db.Integer())
    deutsche_mitte = db.Column(db.Integer())
    die_grauen_fur_alle_generationen = db.Column(db.Integer())
    die_urbane_eine_hiphop_partei = db.Column(db.Integer())
    madgeburger_gartenpartei = db.Column(db.Integer())
    menschliche_welt = db.Column(db.Integer())
    partei_der_humanisten = db.Column(db.Integer())
    partei_fur_gesundheitsforschung = db.Column(db.Integer())
    v_partei_partei_fur_veranderun_vegetarier_und_veganer = db.Column(db.Integer())
    bundnis_c_christen_fur_deutschland = db.Column(db.Integer())
    die_einheit = db.Column(db.Integer())
    die_violetten = db.Column(db.Integer())
    familien_partei_deutschlands = db.Column(db.Integer())
    feministische_partei_die_frauen = db.Column(db.Integer())
    mieterpartei = db.Column(db.Integer())
    neue_liberale_die_sozialliberalen = db.Column(db.Integer())
    unabhangige_fur_burgernahe_demokratie = db.Column(db.Integer())
    ubrige = db.Column(db.Integer())
