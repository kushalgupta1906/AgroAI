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

    diseaseBtn: "Disease Detection"

  },


  hi: {

    home: "होम",

    crop: "फसल सुझाव",

    disease: "रोग पहचान",

    heroTitle: "AgroAI के साथ स्मार्ट खेती 🌾",

    heroDesc:
      "फसल सुझाव प्राप्त करें, पौधों के रोग पहचानें और कृषि समाचार व योजनाएँ देखें।",

    cropBtn: "फसल सुझाव",

    diseaseBtn: "रोग पहचान"

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