from flask import Flask, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import  Bcrypt

import email_validator

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

from web_app import routes
