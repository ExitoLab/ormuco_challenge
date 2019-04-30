import os

user = "test"
password = "test_password"
host = "postgres"
database = "pet_inventory"
port = 5432

DATABASE_CONNECTION_URI = f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}'