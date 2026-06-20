// import { createContext, useState } from "react";

// export const LanguageContext = createContext();

// const translations = {

//   en: {

//     home: "Home",

//     crop: "Crop Recommendation",

//     disease: "Disease Detection",

//     heroTitle: "Smart Farming with AgroAI 🌾",

//     heroDesc:
//       "Get crop recommendations, detect plant diseases and explore agriculture news & schemes.",

//     cropBtn: "Crop Recommendation",

//     diseaseBtn: "Disease Detection"

//   },


//   hi: {

//     home: "होम",

//     crop: "फसल सुझाव",

//     disease: "रोग पहचान",

//     heroTitle: "AgroAI के साथ स्मार्ट खेती 🌾",

//     heroDesc:
//       "फसल सुझाव प्राप्त करें, पौधों के रोग पहचानें और कृषि समाचार व योजनाएँ देखें।",

//     cropBtn: "फसल सुझाव",

//     diseaseBtn: "रोग पहचान"

//   }

// };


// const LanguageProvider = ({ children }) => {

//   const [language, setLanguage] = useState("en");


//   const toggleLanguage = () => {

//     setLanguage(

//       language === "en"
//       ? "hi"
//       : "en"

//     );

//   };


//   return (

//     <LanguageContext.Provider
//       value={{
//         language,
//         toggleLanguage,
//         text: translations[language]
//       }}
//     >

//       {children}

//     </LanguageContext.Provider>

//   );

// };

// export default LanguageProvider;
import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {

  en: {

    home: "Home",

    crop: "Crop Recommendation",

    disease: "Disease Detection",

    heroTitle: "Smart Farming with AgroAI 🌾",

    heroDesc:
      "Get crop recommendations, detect plant diseases and explore agriculture news & schemes.",

    cropBtn: "Crop Recommendation",

    diseaseBtn: "Disease Detection",

    cropRecommendationTitle:
      "Crop Recommendation System",

    nitrogen:
      "Nitrogen (N)",

    phosphorus:
      "Phosphorus (P)",

    potassium:
      "Potassium (K)",

    temperature:
      "Temperature",

    humidity:
      "Humidity",

    ph:
      "pH Value",

    rainfall:
      "Rainfall",

    predictCrop:
      "Predict Crop",

    predicting:
      "Predicting...",

    recommendedCrop:
      "Recommended Crop",

    newsSchemes:
      "Latest News & Schemes",

    diseaseDetectionTitle:
      "Disease Detection",

    detectDisease:
      "Detect Disease",

    detecting:
      "Detecting...",

    predictionResult:
      "Prediction Result",

    confidence:
      "Confidence",

    treatment:
      "Treatment"

  },

  hi: {

    home: "होम",

    crop: "फसल सुझाव",

    disease: "रोग पहचान",

    heroTitle: "AgroAI के साथ स्मार्ट खेती 🌾",

    heroDesc:
      "फसल सुझाव प्राप्त करें, पौधों के रोग पहचानें और कृषि समाचार व योजनाएँ देखें।",

    cropBtn: "फसल सुझाव",

    diseaseBtn: "रोग पहचान",

    cropRecommendationTitle:
      "फसल अनुशंसा प्रणाली",

    nitrogen:
      "नाइट्रोजन (N)",

    phosphorus:
      "फॉस्फोरस (P)",

    potassium:
      "पोटैशियम (K)",

    temperature:
      "तापमान",

    humidity:
      "आर्द्रता",

    ph:
      "pH मान",

    rainfall:
      "वर्षा",

    predictCrop:
      "फसल की भविष्यवाणी करें",

    predicting:
      "भविष्यवाणी की जा रही है...",

    recommendedCrop:
      "अनुशंसित फसल",

    newsSchemes:
      "ताज़ा समाचार और योजनाएँ",
    
    diseaseDetectionTitle:
    "रोग पहचान",

    detectDisease:
      "रोग पहचानें",

    detecting:
      "पहचान की जा रही है...",

    predictionResult:
      "पहचान का परिणाम",

    confidence:
      "विश्वसनीयता",

    treatment:
      "उपचार"

  }

};

const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {

    setLanguage(

      language === "en"
      ? "hi"
      : "en"

    );

  };

  return (

    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        text: translations[language]
      }}
    >

      {children}

    </LanguageContext.Provider>

  );

};

export default LanguageProvider;