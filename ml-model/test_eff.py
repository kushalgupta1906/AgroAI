import tensorflow as tf

print("Loading model...")

model = tf.saved_model.load(
    r"C:\Users\Kushal Gupta\agro-ai\ml-model\saved_plant_disease_model_efficientnet\saved_plant_disease_model_efficientnet"
)

print("SUCCESS")
print(model.signatures.keys())