🚢 Titanic Survival Prediction Web App
This is a Flask app to predict Titanic passenger survival using a pre-trained machine learning model. It features a simple web interface and a programmatic API endpoint.

📥 How to Clone This Repository
First, make sure you have Git installed. Then, open your terminal and run:

bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
Replace <your-username> and <your-repo-name> with your own GitHub details.

📂 Project Structure
text
titanic-app/
├── app.py
├── titanic_model (2).pkl
├── imputer (1).pkl
├── templates/
│   └── index.html
├── static/            # (Optional: CSS/JS files)
└── README.md

🚀 Features
Flask web interface for entering passenger details.

Loads a pretrained ML classifier (titanic_model (2).pkl) and an imputer (imputer (1).pkl).

Returns survival prediction and probability.

🧑‍💻 How to Run Locally
1. Install dependencies 
Make sure you use Python 3. Install the required packages:

bash
pip3 install flask numpy joblib
2. Start the web app
bash
python3 app.py
If running for the first time, ensure you have all the .pkl files and the templates/index.html page.

3. Access the interface
Visit http://127.0.0.1:5000/ in your browser.

🛠 API Usage
You can use the /predict endpoint with a POST request.

Request Example
json
{
  "Pclass": 3,
  "Sex": "male",
  "Age": 25,
  "SibSp": 1,
  "Parch": 0,
  "Fare": 72.5,
  "Embarked": "S"
}
Response Example
json
{
  "survived": 0,
  "probability": 34.17
}
📖 Notes
The .pkl model and imputer were built and exported using Google Colab.

Your index.html lives in the templates/ folder and provides the web form.

For clean setup, use a virtual environment (optional but suggested).

🙏 Acknowledgments
Data: Kaggle Titanic Challenge

ML preprocessing in Google Colab and deployment with Flask.

