from flask import Flask, render_template, url_for, flash, redirect

app = Flask(__name__)

from web_app import routes