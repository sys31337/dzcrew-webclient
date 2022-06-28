import React, { useEffect } from "react";
import Layout from "../../components/layout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";

import styles from "./guides.module.css";
// library.add(fab, fas);

const Guides = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <div>
        <div className={styles.background}></div>
        <div className={styles.content}>
          <div className={styles.title}>How to join DzCrew RolePlay Server</div>
          <div style={{ height: "20px" }}></div>

          <div style={{ height: "70px" }}></div>
          <div className={styles.step}>Step 1</div>
          <div className={styles.instructions}>Join our discord server</div>
          <div style={{ height: "20px" }}></div>
          <a className={styles.link} href="https://discord.com/invite/dzc">
            JOIN
          </a>

          <div style={{ height: "70px" }}></div>
          <div className={styles.step}>Step 2</div>
          <div className={styles.instructions}>Read the rules</div>
          <div style={{ height: "20px" }}></div>
          <a className={styles.link} href="https://dcroleplay.com/rules">
            RULES
          </a>

          <div style={{ height: "70px" }}></div>
          <div className={styles.step}>Step 3</div>
          <div className={styles.instructions}>
            Join
            <div className={styles.highlight}>#غرفة إنتظار المقابلة</div> room
            on discord.
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Guides;
