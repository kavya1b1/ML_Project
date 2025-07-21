# flask is imported for webserver,
#  jsonif to get the json data, 
# render template to get the html page from temlpate folder,
#joblib to import the pre requisited ml dataset
#numpy to handel the numbers
from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np

app = Flask(__name__)
#loads the dataset
model = joblib.load('titanic_model (2).pkl')
imputer = joblib.load('imputer (1).pkl')

#gets the html file

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    sex_male = 1 if data['Sex'] == 'male' else 0
    embarked_Q = 1 if data['Embarked'] == 'Q' else 0
    embarked_S = 1 if data['Embarked'] == 'S' else 0

    features = [
        int(data['Pclass']),
        float(data['Age']),
        int(data['SibSp']),
        int(data['Parch']),
        float(data['Fare']),
        sex_male,
        embarked_Q,
        embarked_S
    ]

    X = np.array([features])
    X = imputer.transform(X)
    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0][1]  # probability of survival

    return jsonify({
        'survived': int(prediction),
        'probability': round(probability * 100, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
