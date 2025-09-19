from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

class MachineData(BaseModel):
    machineId: int
    temperature: float
    vibration: float
    hoursUsed: float

@app.post("/predict")
def predict(data: MachineData):
    # Simulation d'un modèle ML
    risk = random.randint(10, 95)  # valeur aléatoire simulée
    return {"machineId": data.machineId, "risk": risk}
