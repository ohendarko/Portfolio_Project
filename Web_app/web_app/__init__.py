from flask import Flask, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy

import email_validator

app = Flask(__name__)
db = SQLAlchemy(app)

from web_app import routes
