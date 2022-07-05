import React, { useEffect } from "react";
import Layout from "../../components/layout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";

import styles from "./guides.module.css";
import { Player, BigPlayButton } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
// library.add(fab, fas);

const Guides = () => {
  useEffect(() => { }, []);

  return (
    <Layout>
      <div>
        <div className={styles.background}></div>
        <div className={styles.content}>
          <div className={styles.title}>How to join DzCrew RolePlay Server</div>
          <div style={{ height: "20px" }}></div>

          <div style={{ height: "70px" }}></div>
          <div className={styles.step}>Step 1 الخطوة</div>
          <div className={styles.instructions}>Join our discord server</div>
          <div style={{ height: "20px" }}></div>
          <a className={styles.link} href="https://discord.com/invite/dzc">
            JOIN
          </a>

          <div style={{ height: "70px" }}></div>
          <div className={styles.step}>Step 2 الخطوة</div>
          <div className={styles.instructions}>Read the rules</div>
          <div style={{ height: "20px" }}></div>
          <a className={styles.link} href="https://dcroleplay.com/rules">
            RULES
          </a>

          <div style={{ height: "70px" }}></div>
          <div className={styles.step}>Step 3 الخطوة</div>
          <div className={styles.instructions}>
            Join
            <div className={styles.highlight}>#غرفة إنتظار المقابلة</div> room
            on discord.
          </div>
          <div style={{ height: "70px" }}></div>
          <h3>After getting whitelisted, Follow this steps:</h3>
          <div className={styles.step}>Step 1 الخطوة</div>
          <div className={styles.instructions}>
            Open Fivem and then Press F8<br />
            <p dir="rtl">قم بفتح Fivem و الضغظ على زر F8</p>
          </div>
          <div className={styles.step}>Step 2 الخطوة</div>
          <div className={styles.instructions}>
            Paste <div className={styles.highlight}>connect 176.118.193.95:30120</div> and press Enter<br />
            <p dir="rtl">قم بلصق <div className={styles.highlight}>connect 176.118.193.95:30120</div>  و الضغظ على Enter</p>
          </div>
          <div className={styles.step}>Step 3 الخطوة</div>
          <div className={styles.instructions}>
            Press F8 again to close the console<br />
            <p dir="rtl">ثم اضغظ على F8 لاغلاق نافذة التحكم و الضغظ على OK</p>
          </div>

          <h3>You can simply follow this video</h3>
          <Player
            playsInline
            fluid={false}
            width={640}
            poster="https://media.discordapp.net/attachments/907250182792556564/968165695240159352/bank.png"
            src="./final_intro.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    </Layout>
  );
};
export default Guides;
