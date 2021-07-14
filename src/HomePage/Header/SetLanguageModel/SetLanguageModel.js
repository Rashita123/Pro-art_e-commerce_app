import "./SetLanguageModel.css";
import { useLanguageContext } from "../../../AllContext";
import { useState } from "react";
export const SetLanguageModel = ({ setShowLangModel }) => {
  const { setLanguageString } = useLanguageContext();
  const [selectedLang, setSelectedLang] = useState("English");
  const setnewlang = () => {
    setLanguageString(selectedLang);
    setShowLangModel(false);
  };
  return (
    <div className="model-page">
      <div className="select-language-model">
        <div className="model-heading">
          <h3>Select Language</h3>
        </div>
        <select onChange={() => setSelectedLang(event.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <div className="model-buttons">
          <button
            className="model-secondary-button"
            onClick={() => setShowLangModel(false)}
          >
            Cancel
          </button>
          <button className="model-primary-button" onClick={setnewlang}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
