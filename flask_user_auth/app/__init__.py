# app/__init__.py

from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'f122a4f6af1dc0d8fb0b4ceb87f72c3f'

from app import routes
