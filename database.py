from models import db

def get_all(model):
    data = model.query.all()
    return data

def add_pet(model, **kwargs):
    instance = model(**kwargs)
    db.session.add(instance)
    commit_changes()

def commit_changes():
    db.session.commit()

def check_pet(model,pet_name):
    pet_name = model.query.filter_by(pet_name=pet_name).first()
    if pet_name is None:
        return ("Not Found")
    else:
        return("Found")