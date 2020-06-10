import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <p>{t("welcomeToReactJs")}</p>
      <p>{t("editSrcAppToSeeChange")}</p>
      <p>Name: {t("const.name")}</p>
      <p>Name: {t("const.city")}</p>
      <button onClick={() => changeLanguage("vi")}>VI</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default App;
