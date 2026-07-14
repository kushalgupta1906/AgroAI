# 🌱 AgroAI – Smart Farming Assistant

AgroAI is an AI-powered web application that helps farmers make better agricultural decisions through **Crop Recommendation** and **Plant Disease Detection**. The application combines Machine Learning, Deep Learning, and Full Stack Web Development to provide accurate crop suggestions and disease diagnosis.

---

## 🚀 Features

### 🌾 Crop Recommendation
- Recommends the most suitable crop based on:
  - Nitrogen (N)
  - Phosphorus (P)
  - Potassium (K)
  - Temperature
  - Humidity
  - pH
  - Rainfall
- Uses a trained Machine Learning model for prediction.

### 🍃 Plant Disease Detection
- Upload an image of a plant leaf.
- Detects diseases using a Deep Learning model.
- Displays:
  - Predicted Disease
  - Confidence Score
  - Treatment Recommendation

### 📰 Government Scheme Updates
- Fetches the latest government schemes and agriculture-related news for a selected crop using Google News RSS feeds.

---

# 🛠️ Tech Stack

## Frontend
- React.js
- HTML
- CSS
- JavaScript

## Backend
- Flask
- Flask-CORS

## Machine Learning
- Scikit-learn
- TensorFlow
- EfficientNet
- NumPy

## Dataset
- PlantVillage Dataset (Disease Detection)
- Crop Recommendation Dataset

---

# 📂 Project Structure

```
AGRO-AI
│
├── frontend/
│
├── ml-model/
│   ├── saved_plant_disease_model_good/
│   ├── crop_model_best3.pkl
│   ├── train_model.py
│   ├── app.py
│   ├── Crop_recommendation.csv
│   ├── requirements.txt
│   └── confusion_matrix.png
│
└── README.md
```

---

# 🤖 Machine Learning Models

## Crop Recommendation Model

The crop recommendation system was developed using multiple classification algorithms.

Models evaluated:

- Random Forest
- Decision Tree
- K-Nearest Neighbors (KNN)
- Support Vector Machine (SVM)

After evaluation, **Random Forest** achieved the best performance and was selected as the final model.

Final saved model:

```
crop_model_best3.pkl
```

Input Features:

- Nitrogen
- Phosphorus
- Potassium
- Temperature
- Humidity
- pH
- Rainfall

Output:

```
Recommended Crop
```

---

## Plant Disease Detection Model

The disease detection module is built using **EfficientNet** and TensorFlow.

The model predicts diseases for:

### Tomato

- Bacterial Spot
- Early Blight
- Late Blight
- Leaf Mold
- Septoria Leaf Spot
- Spider Mites
- Target Spot
- Yellow Leaf Curl Virus
- Mosaic Virus
- Healthy

### Potato

- Early Blight
- Late Blight
- Healthy

### Pepper Bell

- Bacterial Spot
- Healthy

Final deployed TensorFlow SavedModel:

```
saved_plant_disease_model_good
```

Image preprocessing:

- Resize: **300 × 300**
- EfficientNet preprocessing
- Batch dimension expansion
- TensorFlow inference

---

# 📡 REST API Endpoints

## Home

```
GET /
```

Returns:

```json
{
  "message": "AgroAI Backend Running 😎🔥"
}
```

---

## Crop Recommendation

```
POST /predict
```

Request

```json
{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 21,
  "humidity": 82,
  "ph": 6.5,
  "rainfall": 203
}
```

Response

```json
{
  "recommended_crop": "rice"
}
```

---

## Disease Detection

```
POST /predict-disease
```

Upload:

```
multipart/form-data

image : leaf_image.jpg
```

Response

```json
{
  "disease": "Tomato_Early_blight",
  "confidence": 98.74,
  "solution": "Remove infected leaves and apply fungicides regularly."
}
```

---

## Government Schemes

```
GET /govt-schemes/<crop>
```

Example

```
GET /govt-schemes/rice
```

Returns latest agriculture schemes and news related to the crop.

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/kushalgupta1906/AgroAI.git
```

Move to project directory

```bash
cd AgroAI
```

Install backend dependencies

```bash
pip install -r requirements.txt
```

Start Flask server

```bash
python app.py
```

Start Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📊 Model Pipeline

Crop Recommendation

```
User Input
      ↓
Feature Extraction
      ↓
Random Forest Model
      ↓
Recommended Crop
```

Disease Detection

```
Leaf Image
      ↓
Image Preprocessing
      ↓
EfficientNet Model
      ↓
Disease Prediction
      ↓
Confidence Score
      ↓
Treatment Recommendation
```

---

# 🎯 Future Improvements

- Weather API Integration
- Fertilizer Recommendation
- Soil Health Analysis
- Multi-language Support
- Mobile Application
- Real-time Disease Monitoring
- Farmer Dashboard
- AI Chatbot for Agricultural Assistance

---

# 👨‍💻 Author

**Kushal Gupta**

B.Tech Computer Science & Engineering

Machine Learning | Deep Learning | MERN Stack | Python | Flask | React

---

## ⭐ If you found this project useful, don't forget to star the repository!