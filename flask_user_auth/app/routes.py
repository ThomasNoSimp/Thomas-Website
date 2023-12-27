# app/routes.py

from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import RegistrationForm, LoginForm

# Your user model and database integration would go here
# For simplicity, we'll use an in-memory list to store user data.
users = []


@app.route('/')
@app.route('/home')
def home():
    return render_template('layout.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Hash and salt the password in a real-world scenario
        users.append({'username': form.username.data, 'password': form.password.data})
        flash('Your account has been created! You can now log in.', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # Check username and password against stored data (hash and salt passwords in real-world scenario)
        user = next((u for u in users if u['username'] == form.username.data), None)
        if user and user['password'] == form.password.data:
            flash('Login successful!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login unsuccessful. Please check your username and password.', 'danger')
    return render_template('login.html', form=form)
