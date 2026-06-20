# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.metrics import accuracy_score
# import joblib

# # Load dataset
# data = pd.read_csv("Crop_recommendation.csv")

# # Features
# X = data.drop("label", axis=1)

# # Target
# y = data["label"]

# # Split dataset
# X_train, X_test, y_train, y_test = train_test_split(
#     X,
#     y,
#     test_size=0.2,
#     random_state=42
# )

# # Create model
# model = RandomForestClassifier()

# # Train model
# model.fit(X_train, y_train)

# # Predictions
# predictions = model.predict(X_test)

# # Accuracy
# accuracy = accuracy_score(y_test, predictions)

# print(f"Accuracy: {accuracy * 100:.2f}%")

# # Save model
# joblib.dump(model, "crop_model.pkl")

# print("Model saved successfully!")
import pandas as pd
import joblib

from sklearn.model_selection import (
    train_test_split,
    cross_val_score
)

from sklearn.metrics import accuracy_score

from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
import pandas as pd

# Load Dataset
data = pd.read_csv("Crop_recommendation.csv")

# Features and Target
X = data.drop("label", axis=1)
y = data["label"]

# Train Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# Models
models = {

    "Random Forest": RandomForestClassifier(
        n_estimators=200,
        random_state=42,
        min_samples_split=5,
        max_depth=15
    ),

    "Decision Tree": DecisionTreeClassifier(
        random_state=42
    ),

    "KNN": KNeighborsClassifier(
        n_neighbors=5
    ),

    "SVM": SVC(
        kernel="rbf"
    )
}

best_model = None
best_accuracy = 0
best_name = ""

print("=" * 60)
print("MODEL COMPARISON")
print("=" * 60)

for name, model in models.items():

    model.fit(X_train, y_train)

    test_pred = model.predict(X_test)

    accuracy = accuracy_score(
        y_test,
        test_pred
    )

    print(f"{name}: {accuracy * 100:.2f}%")

    if accuracy > best_accuracy:

        best_accuracy = accuracy
        best_model = model
        best_name = name

print("\n" + "=" * 60)
print(f"BEST MODEL : {best_name}")
print(f"TEST ACCURACY : {best_accuracy * 100:.2f}%")
print("=" * 60)

# ==========================
# Train Accuracy
# ==========================

train_pred = best_model.predict(X_train)

train_accuracy = accuracy_score(
    y_train,
    train_pred
)

print(f"\nTRAIN ACCURACY : {train_accuracy * 100:.2f}%")

# ==========================
# Cross Validation
# ==========================

cv_scores = cross_val_score(
    best_model,
    X,
    y,
    cv=5
)

print("\nCROSS VALIDATION SCORES:")

for i, score in enumerate(cv_scores, start=1):
    print(
        f"Fold {i}: {score * 100:.2f}%"
    )

print(
    f"\nMEAN CV ACCURACY : {cv_scores.mean() * 100:.2f}%"
)

# ==========================
# Save Model
# ==========================

joblib.dump(
    best_model,
    "crop_model_best.pkl"
)

print(
    f"\n{best_name} saved as crop_model_best.pkl"
)