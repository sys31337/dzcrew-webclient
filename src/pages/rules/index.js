import React, { useState } from "react";
import Layout from "../../components/layout";

import styles from "./rules.module.css";

import EnglishRules from "./english";
import ArabicRules from "./arabic";

const Rules = () => {
  const [lang, setLang] = useState(
    () => JSON.parse(localStorage.getItem("lang")) || "en"
  );

  const setLanguage = (lang) => {
    setLang(lang);
    localStorage.setItem("lang", JSON.stringify(lang));
  };
  return (
    <Layout>
      <div className={styles.background}></div>
      <div
        className={styles.langSwitch}
        style={{background: lang === "en" ? 'var(--color-success)' : 'var(--color-danger)'}}
        onClick={() => {
          lang === "en" ? setLanguage("ar") : setLanguage("en");
        }}
      >
        {lang === "en" ? "عربي" : "English"}
      </div>
      {lang === "en" ? <EnglishRules /> : <ArabicRules />}
    </Layout>
  );
};
export default Rules;
