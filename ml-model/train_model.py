# # # import pandas as pd
# # # from sklearn.model_selection import train_test_split
# # # from sklearn.ensemble import RandomForestClassifier
# # # from sklearn.metrics import accuracy_score
# # # import joblib

# # # # Load dataset
# # # data = pd.read_csv("Crop_recommendation.csv")

# # # # Features
# # # X = data.drop("label", axis=1)

# # # # Target
# # # y = data["label"]

# # # # Split dataset
# # # X_train, X_test, y_train, y_test = train_test_split(
# # #     X,
# # #     y,
# # #     test_size=0.2,
# # #     random_state=42
# # # )

# # # # Create model
# # # model = RandomForestClassifier()

# # # # Train model
# # # model.fit(X_train, y_train)

# # # # Predictions
# # # predictions = model.predict(X_test)

# # # # Accuracy
# # # accuracy = accuracy_score(y_test, predictions)

# # # print(f"Accuracy: {accuracy * 100:.2f}%")

# # # # Save model
# # # joblib.dump(model, "crop_model.pkl")

# # # print("Model saved successfully!")
# # import pandas as pd
# # import joblib

# # from sklearn.model_selection import (
# #     train_test_split,
# #     cross_val_score
# # )

# # from sklearn.metrics import accuracy_score

# # from sklearn.ensemble import RandomForestClassifier
# # from sklearn.tree import DecisionTreeClassifier
# # from sklearn.neighbors import KNeighborsClassifier
# # from sklearn.svm import SVC
# # import pandas as pd

# # # Load Dataset
# # data = pd.read_csv("Crop_recommendation.csv")

# # # Features and Target
# # X = data.drop("label", axis=1)
# # y = data["label"]

# # # Train Test Split
# # X_train, X_test, y_train, y_test = train_test_split(
# #     X,
# #     y,
# #     test_size=0.2,
# #     random_state=42,
# #     stratify=y
# # )

# # # Models
# # models = {

# #     "Random Forest": RandomForestClassifier(
# #         n_estimators=200,
# #         random_state=42,
# #         min_samples_split=5,
# #         max_depth=15
# #     ),

# #     "Decision Tree": DecisionTreeClassifier(
# #         random_state=42
# #     ),

# #     "KNN": KNeighborsClassifier(
# #         n_neighbors=5
# #     ),

# #     "SVM": SVC(
# #         kernel="rbf"
# #     )
# # }

# # best_model = None
# # best_accuracy = 0
# # best_name = ""

# # print("=" * 60)
# # print("MODEL COMPARISON")
# # print("=" * 60)

# # for name, model in models.items():

# #     model.fit(X_train, y_train)

# #     test_pred = model.predict(X_test)

# #     accuracy = accuracy_score(
# #         y_test,
# #         test_pred
# #     )

# #     print(f"{name}: {accuracy * 100:.2f}%")

# #     if accuracy > best_accuracy:

# #         best_accuracy = accuracy
# #         best_model = model
# #         best_name = name

# # print("\n" + "=" * 60)
# # print(f"BEST MODEL : {best_name}")
# # print(f"TEST ACCURACY : {best_accuracy * 100:.2f}%")
# # print("=" * 60)

# # # ==========================
# # # Train Accuracy
# # # ==========================

# # train_pred = best_model.predict(X_train)

# # train_accuracy = accuracy_score(
# #     y_train,
# #     train_pred
# # )

# # print(f"\nTRAIN ACCURACY : {train_accuracy * 100:.2f}%")

# # # ==========================
# # # Cross Validation
# # # ==========================

# # cv_scores = cross_val_score(
# #     best_model,
# #     X,
# #     y,
# #     cv=5
# # )

# # print("\nCROSS VALIDATION SCORES:")

# # for i, score in enumerate(cv_scores, start=1):
# #     print(
# #         f"Fold {i}: {score * 100:.2f}%"
# #     )

# # print(
# #     f"\nMEAN CV ACCURACY : {cv_scores.mean() * 100:.2f}%"
# # )

# # # ==========================
# # # Save Model
# # # ==========================

# # joblib.dump(
# #     best_model,
# #     "crop_model_best.pkl"
# # )

# # print(
# #     f"\n{best_name} saved as crop_model_best.pkl"
# # )

# import pandas as pd
# import joblib
# import matplotlib.pyplot as plt
# import seaborn as sns
# import matplotlib.pyplot as plt
# from sklearn.metrics import ConfusionMatrixDisplay
# from sklearn.model_selection import (
#     train_test_split,
#     cross_val_score
# )

# from sklearn.metrics import (
#     accuracy_score,
#     precision_score,
#     recall_score,
#     f1_score,
#     confusion_matrix,
#     classification_report
# )

# from sklearn.ensemble import RandomForestClassifier
# from sklearn.tree import DecisionTreeClassifier
# from sklearn.neighbors import KNeighborsClassifier
# from sklearn.svm import SVC

# # =====================================================
# # Load Dataset
# # =====================================================

# data = pd.read_csv("Crop_recommendation.csv")

# # Features and Target
# X = data.drop("label", axis=1)
# y = data["label"]

# # =====================================================
# # Train Test Split
# # =====================================================

# X_train, X_test, y_train, y_test = train_test_split(
#     X,
#     y,
#     test_size=0.2,
#     random_state=42,
#     stratify=y
# )

# # =====================================================
# # Models
# # =====================================================

# models = {

#     "Random Forest": RandomForestClassifier(
#         n_estimators=200,
#         random_state=42,
#         min_samples_split=5,
#         max_depth=15
#     ),

#     "Decision Tree": DecisionTreeClassifier(
#         random_state=42
#     ),

#     "KNN": KNeighborsClassifier(
#         n_neighbors=5
#     ),

#     "SVM": SVC(
#         kernel="rbf"
#     )

# }

# best_model = None
# best_accuracy = 0
# best_name = ""

# print("=" * 60)
# print("MODEL COMPARISON")
# print("=" * 60)

# # =====================================================
# # Compare Models
# # =====================================================

# for name, model in models.items():

#     model.fit(X_train, y_train)

#     predictions = model.predict(X_test)

#     accuracy = accuracy_score(
#         y_test,
#         predictions
#     )

#     print(f"{name}: {accuracy * 100:.2f}%")

#     if accuracy > best_accuracy:

#         best_accuracy = accuracy
#         best_model = model
#         best_name = name

# print("\n" + "=" * 60)
# print(f"BEST MODEL : {best_name}")
# print(f"TEST ACCURACY : {best_accuracy * 100:.2f}%")
# print("=" * 60)

# # =====================================================
# # Predictions using Best Model
# # =====================================================

# test_pred = best_model.predict(X_test)

# train_pred = best_model.predict(X_train)

# # =====================================================
# # Train Accuracy
# # =====================================================

# train_accuracy = accuracy_score(
#     y_train,
#     train_pred
# )

# print(f"\nTRAIN ACCURACY : {train_accuracy * 100:.2f}%")

# # =====================================================
# # Precision, Recall, F1 Score
# # =====================================================

# precision = precision_score(
#     y_test,
#     test_pred,
#     average="weighted"
# )

# recall = recall_score(
#     y_test,
#     test_pred,
#     average="weighted"
# )

# f1 = f1_score(
#     y_test,
#     test_pred,
#     average="weighted"
# )

# print("\n" + "=" * 60)
# print("EVALUATION METRICS")
# print("=" * 60)

# print(f"Precision : {precision * 100:.2f}%")
# print(f"Recall    : {recall * 100:.2f}%")
# print(f"F1 Score  : {f1 * 100:.2f}%")

# # =====================================================
# # Classification Report
# # =====================================================

# print("\n" + "=" * 60)
# print("CLASSIFICATION REPORT")
# print("=" * 60)

# print(
#     classification_report(
#         y_test,
#         test_pred
#     )
# )

# # =====================================================
# # Cross Validation
# # =====================================================

# # cv_scores = cross_val_score(
# #     best_model,
# #     X,
# #     y,
# #     cv=5
# # )

# # print("\n" + "=" * 60)
# # print("CROSS VALIDATION")
# # print("=" * 60)

# # for i, score in enumerate(cv_scores, start=1):

# #     print(
# #         f"Fold {i}: {score * 100:.2f}%"
# #     )

# # print(
# #     f"\nMEAN CV ACCURACY : {cv_scores.mean() * 100:.2f}%"
# # )

# # # =====================================================
# # # Confusion Matrix
# # # =====================================================

# # cm = confusion_matrix(
# #     y_test,
# #     test_pred
# # )

# # labels = sorted(y.unique())

# # plt.figure(figsize=(14, 12))

# # sns.heatmap(
# #     cm,
# #     annot=True,
# #     fmt="d",
# #     cmap="Blues",
# #     xticklabels=labels,
# #     yticklabels=labels
# # )

# # plt.title("Confusion Matrix")
# # plt.xlabel("Predicted Label")
# # plt.ylabel("Actual Label")

# # plt.xticks(rotation=90)
# # plt.yticks(rotation=0)


# # # =====================================================
# # # Save Best Model
# # # =====================================================

# # joblib.dump(
# #     best_model,
# #     "crop_model_best1.pkl"
# # )

# # print("\n" + "=" * 60)
# # print(f"{best_name} saved successfully as crop_model_best1.pkl")
# # print("=" * 60)

# # plt.tight_layout()
# # plt.show()

# # =====================================================
# # Cross Validation
# # =====================================================

# cv_scores = cross_val_score(
#     best_model,
#     X,
#     y,
#     cv=5
# )

# print("\n" + "=" * 60)
# print("CROSS VALIDATION")
# print("=" * 60)

# for i, score in enumerate(cv_scores, start=1):
#     print(f"Fold {i}: {score * 100:.2f}%")

# print(f"\nMEAN CV ACCURACY : {cv_scores.mean() * 100:.2f}%")

# # =====================================================
# # Confusion Matrix
# # =====================================================

# # =====================================================
# # Confusion Matrix
# # =====================================================

# cm = confusion_matrix(y_test, test_pred)

# disp = ConfusionMatrixDisplay(
#     confusion_matrix=cm,
#     display_labels=best_model.classes_
# )

# fig, ax = plt.subplots(figsize=(12, 12))

# disp.plot(
#     cmap="Blues",
#     ax=ax,
#     xticks_rotation=90,
#     colorbar=False
# )

# plt.title("Confusion Matrix")
# plt.tight_layout()

# # Image save hogi
# plt.savefig("confusion_matrix.png", dpi=300)

# print("\nConfusion Matrix saved as confusion_matrix.png")

# plt.close()

# # =====================================================
# # Save Best Model
# # =====================================================

# joblib.dump(best_model, "crop_model_best3.pkl")

# print("\n" + "=" * 60)
# print(f"{best_name} saved successfully as crop_model_best3.pkl")
# print("=" * 60)
import pandas as pd
import numpy as np
import joblib
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    classification_report,
    confusion_matrix,
    ConfusionMatrixDisplay
)


# ============================================================
# 1. LOAD DATASET
# ============================================================

data = pd.read_csv("Crop_recommendation.csv")

print("=" * 60)
print("DATASET INFORMATION")
print("=" * 60)

print("\nDataset Shape:", data.shape)

print("\nFirst 5 Rows:")
print(data.head())

print("\nColumn Information:")
print(data.info())

print("\nStatistical Summary:")
print(data.describe())


# ============================================================
# 2. DATA PREPROCESSING
# ============================================================

print("\n" + "=" * 60)
print("DATA PREPROCESSING")
print("=" * 60)


# ----------------------------
# Missing Values
# ----------------------------

print("\nMissing Values:")
print(data.isnull().sum())

total_missing = data.isnull().sum().sum()

if total_missing > 0:
    print("\nMissing values found. Removing rows with missing values...")
    data = data.dropna()
else:
    print("\nNo missing values found.")


# ----------------------------
# Duplicate Records
# ----------------------------

duplicate_count = data.duplicated().sum()

print("\nDuplicate Rows:", duplicate_count)

if duplicate_count > 0:
    data = data.drop_duplicates()
    print("Duplicate rows removed.")
else:
    print("No duplicate rows found.")


# ----------------------------
# Check final shape
# ----------------------------

print("\nDataset Shape After Cleaning:", data.shape)


# ============================================================
# 3. FEATURES AND TARGET
# ============================================================

X = data.drop("label", axis=1)
y = data["label"]

print("\nFeatures Used:")
print(list(X.columns))

print("\nNumber of Classes:", y.nunique())

print("\nClass Distribution:")
print(y.value_counts())


# ============================================================
# 4. TRAIN-TEST SPLIT
# ============================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

print("\n" + "=" * 60)
print("TRAIN TEST SPLIT")
print("=" * 60)

print("Training Samples:", X_train.shape[0])
print("Testing Samples :", X_test.shape[0])


# ============================================================
# 5. STANDARDIZATION
# ============================================================

# IMPORTANT:
#
# Random Forest and Decision Tree do NOT require scaling.
#
# KNN and SVM are sensitive to feature magnitude.
# Therefore StandardScaler is included inside their pipelines.
#
# Pipeline also prevents DATA LEAKAGE because scaler.fit()
# happens only on the training portion during model training
# and during every cross-validation fold.


# ============================================================
# 6. DEFINE MODELS
# ============================================================

models = {

    # Tree-based model -> No scaling required
    "Random Forest": Pipeline([
        (
            "model",
            RandomForestClassifier(
                n_estimators=200,
                max_depth=15,
                min_samples_split=5,
                random_state=42
            )
        )
    ]),

    # Tree-based model -> No scaling required
    "Decision Tree": Pipeline([
        (
            "model",
            DecisionTreeClassifier(
                random_state=42
            )
        )
    ]),

    # Distance-based model -> Scaling required
    "KNN": Pipeline([
        ("scaler", StandardScaler()),
        (
            "model",
            KNeighborsClassifier(
                n_neighbors=5
            )
        )
    ]),

    # Distance/kernel-based model -> Scaling required
    "SVM": Pipeline([
        ("scaler", StandardScaler()),
        (
            "model",
            SVC(
                kernel="rbf"
            )
        )
    ])
}


# ============================================================
# 7. MODEL COMPARISON
# ============================================================

print("\n" + "=" * 60)
print("MODEL COMPARISON")
print("=" * 60)

results = {}

best_model = None
best_name = None
best_cv_score = 0


for name, model in models.items():

    print("\n" + "-" * 50)
    print(name)
    print("-" * 50)

    # --------------------------------------------------------
    # Train model
    # --------------------------------------------------------

    model.fit(X_train, y_train)


    # --------------------------------------------------------
    # Test predictions
    # --------------------------------------------------------

    predictions = model.predict(X_test)


    # --------------------------------------------------------
    # Evaluation metrics
    # --------------------------------------------------------

    accuracy = accuracy_score(
        y_test,
        predictions
    )

    precision = precision_score(
        y_test,
        predictions,
        average="weighted",
        zero_division=0
    )

    recall = recall_score(
        y_test,
        predictions,
        average="weighted",
        zero_division=0
    )

    f1 = f1_score(
        y_test,
        predictions,
        average="weighted",
        zero_division=0
    )


    # --------------------------------------------------------
    # 5-Fold Cross Validation
    # --------------------------------------------------------

    cv_scores = cross_val_score(
        model,
        X,
        y,
        cv=5,
        scoring="accuracy"
    )

    mean_cv = cv_scores.mean()


    # --------------------------------------------------------
    # Print Results
    # --------------------------------------------------------

    print(f"Test Accuracy : {accuracy * 100:.2f}%")
    print(f"Precision     : {precision * 100:.2f}%")
    print(f"Recall        : {recall * 100:.2f}%")
    print(f"F1 Score      : {f1 * 100:.2f}%")

    print("\nCross Validation Scores:")

    for i, score in enumerate(cv_scores, start=1):
        print(f"Fold {i}: {score * 100:.2f}%")

    print(
        f"Mean CV Accuracy: "
        f"{mean_cv * 100:.2f}%"
    )


    # --------------------------------------------------------
    # Store Results
    # --------------------------------------------------------

    results[name] = {
        "accuracy": accuracy,
        "precision": precision,
        "recall": recall,
        "f1": f1,
        "cv_accuracy": mean_cv
    }


    # --------------------------------------------------------
    # Select Best Model
    # --------------------------------------------------------
    # Selecting based on cross-validation accuracy instead
    # of only one train-test split.

    if mean_cv > best_cv_score:

        best_cv_score = mean_cv
        best_model = model
        best_name = name


# ============================================================
# 8. RESULTS SUMMARY
# ============================================================

print("\n" + "=" * 70)
print("MODEL PERFORMANCE SUMMARY")
print("=" * 70)

results_df = pd.DataFrame(results).T

results_df = results_df * 100

print(
    results_df.round(2)
)


# ============================================================
# 9. BEST MODEL
# ============================================================

print("\n" + "=" * 60)
print("BEST MODEL")
print("=" * 60)

print("Selected Model :", best_name)

print(
    f"Mean CV Accuracy: "
    f"{best_cv_score * 100:.2f}%"
)


# ============================================================
# 10. TRAIN AND TEST ACCURACY OF BEST MODEL
# ============================================================

train_predictions = best_model.predict(X_train)
test_predictions = best_model.predict(X_test)

train_accuracy = accuracy_score(
    y_train,
    train_predictions
)

test_accuracy = accuracy_score(
    y_test,
    test_predictions
)

print(
    f"\nTrain Accuracy: "
    f"{train_accuracy * 100:.2f}%"
)

print(
    f"Test Accuracy : "
    f"{test_accuracy * 100:.2f}%"
)


# ============================================================
# 11. CLASSIFICATION REPORT
# ============================================================

print("\n" + "=" * 60)
print("CLASSIFICATION REPORT")
print("=" * 60)

print(
    classification_report(
        y_test,
        test_predictions,
        zero_division=0
    )
)


# ============================================================
# 12. CONFUSION MATRIX
# ============================================================

cm = confusion_matrix(
    y_test,
    test_predictions
)

disp = ConfusionMatrixDisplay(
    confusion_matrix=cm,
    display_labels=best_model.classes_
)

fig, ax = plt.subplots(
    figsize=(12, 12)
)

disp.plot(
    ax=ax,
    xticks_rotation=90,
    colorbar=False
)

plt.title(
    f"Confusion Matrix - {best_name}"
)

plt.tight_layout()

plt.savefig(
    "confusion_matrix.png",
    dpi=300
)

plt.close()

print(
    "\nConfusion Matrix saved as "
    "confusion_matrix.png"
)


# ============================================================
# 13. SAVE COMPLETE PIPELINE
# ============================================================

# If SVM/KNN is selected, scaler + model are BOTH saved.
# If Random Forest/Decision Tree is selected,
# the model pipeline is saved.
#
# Therefore during Flask prediction we do NOT need to
# manually standardize the input.

joblib.dump(
    best_model,
    "crop_model_final.pkl"
)

print("\n" + "=" * 60)
print("MODEL SAVED SUCCESSFULLY")
print("=" * 60)

print(
    f"{best_name} saved as "
    f"crop_model_final.pkl"
)