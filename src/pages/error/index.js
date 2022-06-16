import React from "react";
import Layout from "../../components/layout";

import styles from "./error.module.css";

const Error = () => {
  return (
    <Layout>
      <div
        className={`${styles.flexCenter} ${styles.position} ${styles.fullHeight}`}
      >
        <div className={styles.code}>404 </div>

        <div className={styles.message}>NOT FOUND</div>
      </div>
    </Layout>
  );
};

export default Error;
