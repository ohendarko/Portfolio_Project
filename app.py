from flask import Flask

app = Flask(__name__)

app.route("/")
app.route("/home")
## def...
# render template

app.route("/algorithms")
## def...
# render template

app.route("/news")
## def...
# render template

app.route("/calculators")
## def...
# render template