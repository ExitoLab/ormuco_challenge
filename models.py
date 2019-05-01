import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()

class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    pet_name = db.Column(db.String(100))
    pet_favorite_color = db.Column(db.String(20))
    pet_category = db.Column(db.String(20))

    def __init__(self, pet_name, pet_favorite_color, pet_category):
        self.pet_name = pet_name
        self.pet_favorite_color = pet_favorite_color
        self.pet_category = pet_category