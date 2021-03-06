import json,os,time

from flask import Flask, redirect, url_for, request, render_template, make_response, session, abort, flash,Response,jsonify

from __init__ import create_app,db
import database
from models import Pet

#load values from .env for unit testing
from dotenv import load_dotenv
load_dotenv()

time.sleep(60) # to ensure postgressql runs immediately the app comes up

app = create_app()

@app.route('/')
def index():
    return render_template('index.html')

def check_pet_by_name(pet_name):
    check_pet_name_exist = database.check_pet(Pet,pet_name)
    return (check_pet_name_exist)

@app.route("/check_pet_name", methods=['GET'])
def check_pet_name():
    pet_name = request.args.get('pet_name').lower()
    check_pet_name_exist = database.check_pet(Pet,pet_name)
    return jsonify({"status": check_pet_name_exist})

@app.route('/register_pet', methods=['POST'])
def register_pet():
    pet_name=request.form['pet_name'].lower()
    pet_favorite_color=request.form['pet_favorite_color']
    pet_category=request.form['pet_category']

    if pet_name == '' or pet_favorite_color == '':
        return jsonify({"status": "empty parameter"}), 401

    check_pet_exist = check_pet_by_name(pet_name)
    if check_pet_exist == "Found":
        return jsonify({"status": "Found"})

    try:
        database.add_pet(Pet, pet_name=pet_name, pet_favorite_color=pet_favorite_color, pet_category=pet_category)
        return jsonify({"status": "ok"}), 200
    except Exception as e:
	    return(str(e))

if __name__ == "__main__":
    port = eval(os.environ.get("port"))
    app.run(host="0.0.0.0", port=port)