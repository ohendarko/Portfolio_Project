# Portfolio Project
## MedAlgorythms

This a documentaion of the code for a web app called MedAlgorythms.
Link to deployed site: [https//:www.medalgorythms.glocked.tech](https://medalgorythms.glocked.tech "Medalgorythms")

Author: 
* Kwadwo Ohene Darko; 
  * [LinkedIn](https://www.linkedin.com/in/dr-kwadwo-ohene-darko "Kwadwo Ohene Darko, PharmD")
  * [X (formerly known as twitter)](https://x.com/ohene_kwadwo?t=Z9WjeZ5vPnkROslQYfWiVA&s=09 "@ohene_kwadwo")

### Required Module Installations:
`$ pip install `
* Flask
* flask-sqlalchemy
* flask-login
* flask-bcrypt
* flask-wtf
* email_validator
* requests
* wtforms
* Pillow

### Usage:
In Web_app directory
```bash
$ python3 app.py
```
#### OR
 set FLASK_APP environment variable to app.py
```bash
$ FLASK_APP=app.py
```

and then
```bash
$ flask run
```

Should be accessible at http://127.0.0.1:5000. You may need to hold Ctrl and click.

Set up database in order to use registration and logins. I use python 3.12. Yours may be different.
```bash
$ python3
Python 3.12.1 (main, Dec 10 2023, 15:07:36) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
>>> with app.app_context():
....    db.create_all()
....
>>> exit()
$
```


### Future updates
* Quiz cards
* League/Throne system
* Achievements profile
* Shopping
* Discussion Forums