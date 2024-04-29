# Portfolio Project - MedAlgorythms

## Objective
Although the app is intended to have diverse features, the core of MedAlgorythms is the "Algorythms" section. The intention is to design a "virtual assistant" of a sort that guides your next course of action based on prompts and inputs. This has the potential to be an mHealth intervention to enhance multiple aspects of critical care as well as academic study.

Let's take a short example from the only algorythm under works; ALCS algorythm.
If you start up the app by following the instructions below, you should see ACLS algorythm on a blue button under the 'IN PROGRESS' heading. Clicking that should direct you to another page. You'll be presented with your initial expected course of action. After making sure the initial box has been fulfilled, you're then asked if the rhythm is shockable or non-shockable. This app is designed with health practitioners in mind so apologies if I'm not making sense. But fast forward, you'd notice that, if you click yes or no, you're presented with different courses of action and it follows suit. So it's offering some sort of assistance, and has potential be used as a learning tool.
Currently it's a click and respond module. I see it as in its fetal stages, but the end goal(adult stage) is to generate some AI. 
There are a lot of optimizations I have to do and more features to add and to correct; dosing, technique instructions, autoruns/autoplay, live simple calculator, etc.
What you see is not exhaustive. It's just a template to the many algorythms that will be implemented later in the future. The reason why only one is available is I prefer to run, test and upgrade one prototype to optimised and efficient code, and make it as user friendly as possible and then carry the principles throughout, than run a lot of algorythms and have to alter all codes one by one as insights progress.

  >This project will grow as my knowlege in programming grows.
  ```HTML5, CSS3, JavaScript```

Other sections worth noting:
* Medical Calculators
* Health News

This documentation will change as updates continue to rolled over. This is my second log(Log2) and it will increase as I add more updates and change the documentation.
(Log2).


Author: 
* Kwadwo Ohene Darko; 
  * [LinkedIn](https://www.linkedin.com/in/dr-kwadwo-ohene-darko "Kwadwo Ohene Darko, PharmD")
  * [X (formerly known as twitter)](https://x.com/ohene_kwadwo?t=Z9WjeZ5vPnkROslQYfWiVA&s=09 "@ohene_kwadwo")


-------
## Running the app.

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
* Drug dose calculators
* Quiz cards
* League/Throne system
* Achievements profile
* Shopping
* Discussion Forums