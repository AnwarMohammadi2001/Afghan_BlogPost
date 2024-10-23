import React, { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("EN"); // Default to English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "EN" ? "FA" : "EN"));
  };

  return (
    <div className="flex justify-center items-center ">
      <button
        onClick={toggleLanguage}
        className="bg-indigo-500 dark:bg-indigo-700 w-20 text-white font-bold py-1 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-600 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-400"
      >
        {language === "EN" ? "English" : "Dari"}
      </button>
    </div>
  );
};

export default Language;
