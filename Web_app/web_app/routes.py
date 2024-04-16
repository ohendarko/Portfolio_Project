from flask import render_template, url_for, flash, redirect
from web_app.forms import RegistrationForm, LoginForm
from web_app import app


@app.route("/")
@app.route("/welcome")
def welcome():
    return render_template('LandingPage.html')


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


@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)


@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Register', form=form)
