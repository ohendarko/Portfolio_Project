from flask import Flask, render_template, url_for, flash, redirect

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/acls-algorithm")
def acls_algorithm():
    return render_template('acls_algorythm.html')


@app.route("/news")
def news():
    return render_template('news.html')


@app.route("/calculators")
def calculators():
    return render_template('calculators.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
