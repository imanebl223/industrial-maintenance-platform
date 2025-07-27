# ai-api/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # autorise les requêtes cross-origin depuis React

# 👉 Route /predict
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Lecture des données envoyées par le frontend
    temperature = data.get("temperature")
    vibration = data.get("vibration")
    pressure = data.get("pressure")

    # Simulation simple de logique IA
    if temperature > 70 or vibration > 0.6:
        risk = "High"
        probability = 0.92
    else:
        risk = "Low"
        probability = 0.18

    return jsonify({
        "risk": risk,
        "probability": probability
    })

# Lancement du serveur Flask
if __name__ == "__main__":
    app.run(port=5001)
