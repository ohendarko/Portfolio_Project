from flask import Flask, render_template, url_for, flash, redirect

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/acls-algorithm")
def acls_algorithm():
    return render_template('acls_algorythm.html')

app.route("/news")
## def...
# render template

app.route("/calculators")
## def...
# render template