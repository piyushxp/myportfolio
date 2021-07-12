from flask import Flask, render_template ,url_for
import csv
app = Flask(__name__)

@app.route('/')
def home():
  return render_template('index.html')


@app.route('/index.html')
def my_home():
  return render_template('index.html')

@app.route('/contact.html')
def contact():
  return render_template('contact.html')

@app.route('/works.html')
def works():
  return render_template('works.html')

@app.route('/about.html')
def about():
  return render_template('about.html')

# @app.route('/components.html')
# def components():
#   return render_template('components.html')

@app.route('/submit_form',methods=['POST','GET'])
def submit_form():
    if request.method == 'POST':
      data = request.form.to_dict()
      write_to_csv(data)
      return "Form has been submitted!"
    else:
      return "something went wrong :("

def write_to_csv(data):
  with open('database.csv',mode='a') as database2:
    email = data['email']
    subject = data['subject']
    message = data['message']
    csv_writer = csv.writer(database2,delimiter =",",quotechar='',quoting = csv.QUOTE_MINIMAL)
    csv_writer.writerow([email,subject,message])