from flask import render_template, url_for, flash, redirect
from web_app import app


@app.route("/welcome")
def welcome():
    return render_template('LandingPage.html')


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/acls-algorithm")
def acls_algorithm():
    return render_template('acls_algorythm.html')


@app.route("/bls-algorithm")
def bls_algorithm():
    return render_template('bls_algorythm.html')


@app.route("/news")
def news():
    return render_template('news.html')


@app.route("/calculators")
def calculators():
    return render_template('calculators.html')


@app.route("/under_construction")
def under_construction():
    return render_template('under_construction.html')
