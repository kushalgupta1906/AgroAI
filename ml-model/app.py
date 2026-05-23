# # from flask import Flask, request, jsonify
# # from flask_cors import CORS

# # import joblib
# # import numpy as np
# # import tensorflow as tf
# # import os

# # from tensorflow.keras.preprocessing import image


# # app = Flask(__name__)

# # # Enable CORS
# # CORS(app)


# # # =========================
# # # LOAD MODELS
# # # =========================

# # crop_model = joblib.load("crop_model.pkl")

# # disease_model = tf.saved_model.load(
# #     "saved_plant_disease_model"
# # )


# # # =========================
# # # DISEASE CLASSES
# # # =========================

# # disease_classes = [

# #     'Pepper__bell___Bacterial_spot',
# #     'Pepper__bell___healthy',

# #     'Potato___Early_blight',
# #     'Potato___Late_blight',
# #     'Potato___healthy',

# #     'Tomato_Bacterial_spot',
# #     'Tomato_Early_blight',
# #     'Tomato_Late_blight',
# #     'Tomato_Leaf_Mold',
# #     'Tomato_Septoria_leaf_spot',
# #     'Tomato_Spider_mites_Two_spotted_spider_mite',
# #     'Tomato__Target_Spot',
# #     'Tomato__Tomato_YellowLeaf__Curl_Virus',
# #     'Tomato__Tomato_mosaic_virus',
# #     'Tomato_healthy'
# # ]


# # # =========================
# # # HOME ROUTE
# # # =========================

# # @app.route("/")
# # def home():

# #     return jsonify({
# #         "message": "AgroAI Backend Running 😎🔥"
# #     })


# # # =========================
# # # CROP RECOMMENDATION API
# # # =========================

# # @app.route("/predict", methods=["POST"])
# # def predict_crop():

# #     try:

# #         data = request.json

# #         features = np.array([[
# #             data["N"],
# #             data["P"],
# #             data["K"],
# #             data["temperature"],
# #             data["humidity"],
# #             data["ph"],
# #             data["rainfall"]
# #         ]])

# #         prediction = crop_model.predict(features)

# #         return jsonify({
# #             "recommended_crop": prediction[0]
# #         })

# #     except Exception as e:

# #         return jsonify({
# #             "error": str(e)
# #         })


# # # =========================
# # # DISEASE DETECTION API
# # # =========================

# # @app.route("/predict-disease", methods=["POST"])
# # def predict_disease():

# #     try:

# #         # =========================
# #         # CHECK IMAGE
# #         # =========================

# #         if "image" not in request.files:

# #             return jsonify({
# #                 "error": "No image uploaded"
# #             })


# #         file = request.files["image"]

# #         file_path = "temp.jpg"

# #         file.save(file_path)


# #         # =========================
# #         # IMAGE PREPROCESSING
# #         # =========================

# #         img = image.load_img(
# #             file_path,
# #             target_size=(224, 224)
# #         )

# #         img_array = image.img_to_array(img)

# #         img_array = img_array / 255.0

# #         img_array = np.expand_dims(
# #             img_array,
# #             axis=0
# #         )


# #         # =========================
# #         # PREDICTION
# #         # =========================

# #         infer = disease_model.signatures[
# #             "serving_default"
# #         ]

# #         prediction = infer(
# #             tf.convert_to_tensor(img_array)
# #         )

# #         prediction = list(
# #             prediction.values()
# #         )[0]

# #         predicted_index = np.argmax(
# #             prediction
# #         )

# #         predicted_class = disease_classes[
# #             predicted_index
# #         ]


# #         # =========================
# #         # DELETE TEMP FILE
# #         # =========================

# #         os.remove(file_path)


# #         solution = disease_solutions.get(
# #         predicted_class,
# #         "No treatment available."
# #         )

# #         return jsonify({
# #         "disease": predicted_class,
# #         "solution": solution
# #         })


# #     except Exception as e:

# #         return jsonify({
# #             "error": str(e)
# #         })


# # # =========================
# # # RUN SERVER
# # # =========================

# # if __name__ == "__main__":

# #     app.run(debug=True)

# # disease_solutions = {

# #     "Potato___Early_blight":
# #     "Use fungicides containing chlorothalonil or mancozeb. Remove infected leaves.",

# #     "Potato___Late_blight":
# #     "Use copper-based fungicides. Avoid excessive moisture and improve airflow.",

# #     "Potato___healthy":
# #     "Your potato plant is healthy 😎",

# #     "Pepper__bell___Bacterial_spot":
# #     "Use disease-free seeds and copper sprays. Avoid overhead irrigation.",

# #     "Pepper__bell___healthy":
# #     "Your pepper plant is healthy 😎",

# #     "Tomato_Bacterial_spot":
# #     "Use copper fungicides and avoid wetting leaves during watering.",

# #     "Tomato_Early_blight":
# #     "Remove infected leaves and apply fungicides regularly.",

# #     "Tomato_Late_blight":
# #     "Use copper fungicides and improve air circulation around plants.",

# #     "Tomato_Leaf_Mold":
# #     "Reduce humidity and use appropriate fungicides.",

# #     "Tomato_Septoria_leaf_spot":
# #     "Remove infected leaves and avoid overhead watering.",

# #     "Tomato_Spider_mites_Two_spotted_spider_mite":
# #     "Use neem oil or insecticidal soap spray.",

# #     "Tomato__Target_Spot":
# #     "Apply fungicides and maintain proper plant spacing.",

# #     "Tomato__Tomato_YellowLeaf__Curl_Virus":
# #     "Control whiteflies and remove infected plants immediately.",

# #     "Tomato__Tomato_mosaic_virus":
# #     "Remove infected plants and disinfect gardening tools.",

# #     "Tomato_healthy":
# #     "Your tomato plant is healthy 😎"
# # }
# from flask import Flask, request, jsonify
# from flask_cors import CORS

# import joblib
# import numpy as np
# import tensorflow as tf
# import os

# from tensorflow.keras.preprocessing import image


# app = Flask(__name__)

# # Enable CORS
# CORS(app)


# # =========================
# # LOAD MODELS
# # =========================

# crop_model = joblib.load("crop_model.pkl")

# disease_model = tf.saved_model.load(
#     "saved_plant_disease_model"
# )


# # =========================
# # DISEASE CLASSES
# # =========================

# disease_classes = [

#     'Pepper__bell___Bacterial_spot',
#     'Pepper__bell___healthy',

#     'Potato___Early_blight',
#     'Potato___Late_blight',
#     'Potato___healthy',

#     'Tomato_Bacterial_spot',
#     'Tomato_Early_blight',
#     'Tomato_Late_blight',
#     'Tomato_Leaf_Mold',
#     'Tomato_Septoria_leaf_spot',
#     'Tomato_Spider_mites_Two_spotted_spider_mite',
#     'Tomato__Target_Spot',
#     'Tomato__Tomato_YellowLeaf__Curl_Virus',
#     'Tomato__Tomato_mosaic_virus',
#     'Tomato_healthy'
# ]


# # =========================
# # DISEASE SOLUTIONS
# # =========================

# disease_solutions = {

#     "Potato___Early_blight":
#     "Use fungicides containing chlorothalonil or mancozeb. Remove infected leaves.",

#     "Potato___Late_blight":
#     "Use copper-based fungicides. Avoid excessive moisture and improve airflow.",

#     "Potato___healthy":
#     "Your potato plant is healthy 😎",

#     "Pepper__bell___Bacterial_spot":
#     "Use disease-free seeds and copper sprays. Avoid overhead irrigation.",

#     "Pepper__bell___healthy":
#     "Your pepper plant is healthy 😎",

#     "Tomato_Bacterial_spot":
#     "Use copper fungicides and avoid wetting leaves during watering.",

#     "Tomato_Early_blight":
#     "Remove infected leaves and apply fungicides regularly.",

#     "Tomato_Late_blight":
#     "Use copper fungicides and improve air circulation around plants.",

#     "Tomato_Leaf_Mold":
#     "Reduce humidity and use appropriate fungicides.",

#     "Tomato_Septoria_leaf_spot":
#     "Remove infected leaves and avoid overhead watering.",

#     "Tomato_Spider_mites_Two_spotted_spider_mite":
#     "Use neem oil or insecticidal soap spray.",

#     "Tomato__Target_Spot":
#     "Apply fungicides and maintain proper plant spacing.",

#     "Tomato__Tomato_YellowLeaf__Curl_Virus":
#     "Control whiteflies and remove infected plants immediately.",

#     "Tomato__Tomato_mosaic_virus":
#     "Remove infected plants and disinfect gardening tools.",

#     "Tomato_healthy":
#     "Your tomato plant is healthy 😎"
# }


# # =========================
# # HOME ROUTE
# # =========================

# @app.route("/")
# def home():

#     return jsonify({
#         "message": "AgroAI Backend Running 😎🔥"
#     })


# # =========================
# # CROP RECOMMENDATION API
# # =========================

# @app.route("/predict", methods=["POST"])
# def predict_crop():

#     try:

#         data = request.json

#         features = np.array([[
#             data["N"],
#             data["P"],
#             data["K"],
#             data["temperature"],
#             data["humidity"],
#             data["ph"],
#             data["rainfall"]
#         ]])

#         prediction = crop_model.predict(features)

#         return jsonify({
#             "recommended_crop": prediction[0]
#         })

#     except Exception as e:

#         return jsonify({
#             "error": str(e)
#         })


# # =========================
# # DISEASE DETECTION API
# # =========================

# @app.route("/predict-disease", methods=["POST"])
# def predict_disease():

#     try:

#         # =========================
#         # CHECK IMAGE
#         # =========================

#         if "image" not in request.files:

#             return jsonify({
#                 "error": "No image uploaded"
#             })


#         file = request.files["image"]

#         file_path = "temp.jpg"

#         file.save(file_path)


#         # =========================
#         # IMAGE PREPROCESSING
#         # =========================

#         img = image.load_img(
#             file_path,
#             target_size=(224, 224)
#         )

#         img_array = image.img_to_array(img)

#         img_array = img_array / 255.0

#         img_array = np.expand_dims(
#             img_array,
#             axis=0
#         )


#         # =========================
#         # MODEL PREDICTION
#         # =========================

#         infer = disease_model.signatures[
#             "serving_default"
#         ]

#         prediction = infer(
#             tf.convert_to_tensor(img_array)
#         )

#         prediction = list(
#             prediction.values()
#         )[0]

#         predicted_index = np.argmax(
#             prediction
#         )

#         predicted_class = disease_classes[
#             predicted_index
#         ]


#         # =========================
#         # CONFIDENCE SCORE
#         # =========================

#         confidence = float(
#             np.max(prediction) * 100
#         )


#         # =========================
#         # GET SOLUTION
#         # =========================

#         solution = disease_solutions.get(
#             predicted_class,
#             "No treatment available."
#         )


#         # =========================
#         # DELETE TEMP FILE
#         # =========================

#         os.remove(file_path)


#         # =========================
#         # FINAL RESPONSE
#         # =========================

#         return jsonify({

#             "disease": predicted_class,

#             "confidence":
#             round(confidence, 2),

#             "solution": solution

#         })


#     except Exception as e:

#         return jsonify({
#             "error": str(e)
#         })


# # =========================
# # RUN SERVER
# # =========================

# if __name__ == "__main__":

#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS

import joblib
import numpy as np
import tensorflow as tf
import os
import feedparser

from tensorflow.keras.preprocessing import image


app = Flask(__name__)

# Enable CORS
CORS(app)


# =========================
# LOAD MODELS
# =========================

crop_model = joblib.load(
    "crop_model.pkl"
)

disease_model = tf.saved_model.load(
    "saved_plant_disease_model"
)


# =========================
# DISEASE CLASSES
# =========================

disease_classes = [

    'Pepper__bell___Bacterial_spot',
    'Pepper__bell___healthy',

    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',

    'Tomato_Bacterial_spot',
    'Tomato_Early_blight',
    'Tomato_Late_blight',
    'Tomato_Leaf_Mold',
    'Tomato_Septoria_leaf_spot',
    'Tomato_Spider_mites_Two_spotted_spider_mite',
    'Tomato__Target_Spot',
    'Tomato__Tomato_YellowLeaf__Curl_Virus',
    'Tomato__Tomato_mosaic_virus',
    'Tomato_healthy'
]


# =========================
# DISEASE SOLUTIONS
# =========================

disease_solutions = {

    "Potato___Early_blight":
    "Use fungicides containing chlorothalonil or mancozeb. Remove infected leaves.",

    "Potato___Late_blight":
    "Use copper-based fungicides. Avoid excessive moisture and improve airflow.",

    "Potato___healthy":
    "Your potato plant is healthy 😎",

    "Pepper__bell___Bacterial_spot":
    "Use disease-free seeds and copper sprays. Avoid overhead irrigation.",

    "Pepper__bell___healthy":
    "Your pepper plant is healthy 😎",

    "Tomato_Bacterial_spot":
    "Use copper fungicides and avoid wetting leaves during watering.",

    "Tomato_Early_blight":
    "Remove infected leaves and apply fungicides regularly.",

    "Tomato_Late_blight":
    "Use copper fungicides and improve air circulation around plants.",

    "Tomato_Leaf_Mold":
    "Reduce humidity and use appropriate fungicides.",

    "Tomato_Septoria_leaf_spot":
    "Remove infected leaves and avoid overhead watering.",

    "Tomato_Spider_mites_Two_spotted_spider_mite":
    "Use neem oil or insecticidal soap spray.",

    "Tomato__Target_Spot":
    "Apply fungicides and maintain proper plant spacing.",

    "Tomato__Tomato_YellowLeaf__Curl_Virus":
    "Control whiteflies and remove infected plants immediately.",

    "Tomato__Tomato_mosaic_virus":
    "Remove infected plants and disinfect gardening tools.",

    "Tomato_healthy":
    "Your tomato plant is healthy 😎"
}


# =========================
# HOME ROUTE
# =========================

@app.route("/")
def home():

    return jsonify({
        "message": "AgroAI Backend Running 😎🔥"
    })


# =========================
# CROP RECOMMENDATION API
# =========================

@app.route("/predict", methods=["POST"])
def predict_crop():

    try:

        data = request.json

        features = np.array([[
            data["N"],
            data["P"],
            data["K"],
            data["temperature"],
            data["humidity"],
            data["ph"],
            data["rainfall"]
        ]])

        prediction = crop_model.predict(
            features
        )

        return jsonify({

            "recommended_crop":
            prediction[0]

        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# =========================
# DISEASE DETECTION API
# =========================

@app.route("/predict-disease", methods=["POST"])
def predict_disease():

    try:

        if "image" not in request.files:

            return jsonify({
                "error":
                "No image uploaded"
            })


        file = request.files["image"]

        file_path = "temp.jpg"

        file.save(file_path)


        # =========================
        # IMAGE PREPROCESSING
        # =========================

        img = image.load_img(
            file_path,
            target_size=(224, 224)
        )

        img_array = image.img_to_array(
            img
        )

        img_array = img_array / 255.0

        img_array = np.expand_dims(
            img_array,
            axis=0
        )


        # =========================
        # MODEL PREDICTION
        # =========================

        infer = disease_model.signatures[
            "serving_default"
        ]

        prediction = infer(
            tf.convert_to_tensor(
                img_array
            )
        )

        prediction = list(
            prediction.values()
        )[0]

        predicted_index = np.argmax(
            prediction
        )

        predicted_class = disease_classes[
            predicted_index
        ]


        # =========================
        # CONFIDENCE SCORE
        # =========================

        confidence = float(
            np.max(prediction) * 100
        )


        # =========================
        # GET SOLUTION
        # =========================

        solution = disease_solutions.get(
            predicted_class,
            "No treatment available."
        )


        # =========================
        # DELETE TEMP FILE
        # =========================

        os.remove(file_path)


        # =========================
        # FINAL RESPONSE
        # =========================

        return jsonify({

            "disease":
            predicted_class,

            "confidence":
            round(confidence, 2),

            "solution":
            solution

        })


    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# =========================
# GOVT SCHEMES API
# =========================

@app.route("/govt-schemes/<crop>")
def govt_schemes(crop):

    try:

        feed_url = (
            "https://news.google.com/rss/search?q="
            + crop
            + "+government+scheme+farmers+india"
        )

        feed = feedparser.parse(
            feed_url
        )

        schemes = []

        for entry in feed.entries[:5]:

            schemes.append({

                "title":
                entry.title,

                "link":
                entry.link

            })


        return jsonify({

            "crop": crop,

            "schemes": schemes

        })


    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# =========================
# RUN SERVER
# =========================

if __name__ == "__main__":

    app.run(debug=True)