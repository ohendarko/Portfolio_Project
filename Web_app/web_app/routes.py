"""Contains endpoint definitions"""
import secrets
from PIL import Image
import os
from flask import render_template, url_for, flash, redirect, request, session
from web_app.forms import RegistrationForm, LoginForm, UpdateAccountForm
from web_app import app, db, bcrypt
from web_app.models import User
from flask_login import login_user, current_user, logout_user, login_required


@app.route("/")
@app.route("/home")
def home():
    """link to homepage"""
    return render_template('LandingPage.html')


@app.route("/dashboard")
@login_required
def dashboard():
    """Link to dashboard"""
    image_file = url_for('static', filename='profile_pics/' + current_user.image_file)
    return render_template('home.html', image_file=image_file)


@app.route("/acls-algorithm")
@login_required
def acls_algorithm():
    """Link to acls algorythm"""
    return render_template('acls_algorythm.html')


@app.route("/bls-algorithm")
@login_required
def bls_algorithm():
    """Link to bls algorythm"""
    return render_template('bls_algorythm.html')


@app.route("/news")
@login_required
def news():
    """Link to news page"""
    return render_template('news.html')


@app.route("/calculators")
@login_required
def calculators():
    """Link to calculators page"""
    return render_template('calculators.html')


@app.route("/under_construction")
def under_construction():
    """Under construction"""
    return render_template('under_construction.html')


@app.route("/about")
@login_required
def about():
    """Link to about page: inaccessible on app"""
    return render_template('about.html', title='About')


@app.route("/register", methods=['GET', 'POST'])
def register():
    """Link to register"""
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)


@app.route("/login", methods=['GET', 'POST'])
def login():
    """Link to log in"""
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Log In', form=form)


@app.route("/logout")
def logout():
    """Log out"""
    session.pop('image_file', None)
    logout_user()
    return redirect(url_for('home'))


def save_picture(form_picture):
    """Saves pictures and enables update on account/database.
    Renders resolution to reduce space consumption on server"""
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, 'static/profile_pics', picture_fn)
    output_size = (125, 125)
    i = Image.open(form_picture)
    i.thumbnail(output_size)
    i.save(picture_path)
    return picture_fn


@app.route("/account", methods=['GET', 'POST'])
@login_required
def account():
    """Link to account"""
    form = UpdateAccountForm()
    if form.validate_on_submit():
        if form.picture.data:
            picture_file = save_picture(form.picture.data)
            current_user.image_file = picture_file
        current_user.username = form.username.data
        current_user.email = form.email.data
        db.session.commit()
        flash('Your account has been updated!', 'success')
        return redirect(url_for('account'))
    elif request.method == 'GET':
        form.username.data = current_user.username
        form.email.data = current_user.email
    image_file = url_for('static', filename='profile_pics/' + current_user.image_file)
    return render_template('account.html', title='Account',
                           image_file=image_file, form=form)
