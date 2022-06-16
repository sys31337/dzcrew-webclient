import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from "./home.module.css";

library.add(fab, fas);

const Home = () => {
  useEffect(() => {
    const nextEl = document.getElementById("next");
    const previousEl = document.getElementById("previous");
    const sliderEl = document.getElementById("slider");
    //const imgWidth = sliderEl.offsetWidth;
    nextEl.addEventListener("click", onNextClick);
    previousEl.addEventListener("click", onPreviousClick);
    const imgWidth = sliderEl.offsetWidth;

    const loopAutoNext = (time) => {
      setTimeout(() => {
        onNextClick();
        loopAutoNext(5000);
      }, time);
    };

    loopAutoNext(5000);

    function onNextClick() {
      sliderEl.scrollLeft += imgWidth;
      const sliderFullWidth = sliderEl.scrollWidth;
      const lastSlide = sliderFullWidth - imgWidth;
      if (lastSlide === sliderEl.scrollLeft) {
        sliderEl.scrollLeft = 0;
      }
    }

    function onPreviousClick() {
      const imgWidth = sliderEl.offsetWidth;
      sliderEl.scrollLeft -= imgWidth;
    }
  });

  return (
    <Layout>
      <div className={styles.container}>
        <h1>
          <img src="logo.png" width="250px" alt="Logo" />
        </h1>
        <div className={styles.sliderContainer}>
          <span id="previous" className={styles.previous}>
            <FontAwesomeIcon icon={["fas", "angle-left"]} />
          </span>
          <span id="next" className={styles.next}>
            <FontAwesomeIcon icon={["fas", "angle-right"]} />
          </span>
          <div id="slider" className={styles.slider}>
            <img
              alt="splash"
              className={styles.sliderImg}
              src="https://wallpapercave.com/wp/wp8606700.jpg"
            />
            <img
              alt="splash"
              className={styles.sliderImg}
              src="https://wallpapercave.com/wp/wp2455904.jpg"
            />
            <img
              alt="splash"
              className={styles.sliderImg}
              src="https://wallpapercave.com/wp/wp5729070.jpg"
            />
            <img
              alt="splash"
              className={styles.sliderImg}
              src="https://wallpapercave.com/wp/wp9074996.jpg"
            />
            <img
              alt="splash"
              className={styles.sliderImg}
              src="https://wallpapercave.com/wp/wp5740266.jpg"
            />
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <h5 className={styles.cardTitle}>How to play ?</h5>
              </div>
              <p className={styles.cardText}>
                You will find guides about Dz-Crew RolePlay Server, they get
                updated on random basis, you'd better check them from time to
                time
              </p>
              <p className={styles.cardFooter}>
                <Link to="/guides">
                  <button className="button color-success">
                    <FontAwesomeIcon icon={["fas", "question-circle"]} />
                    &nbsp;Check the guides
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <h5 className={styles.cardTitle}>Join our community</h5>
              </div>
              <p className={styles.cardText}>
                By joining the community, you agree to the rules cited on the
                rules page. you will find a link to join our Discord server
                below.
              </p>
              <p className={styles.cardFooter}>
                <button
                  className="button color-discord"
                  onClick={() => window.open("https://discord.gg/dzc")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "discord"]} />
                  &nbsp;Join our Discord
                </button>
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <h5 className={styles.cardTitle}>Read the rules!</h5>
              </div>
              <p className={styles.cardText}>
                You will find Dz-Crew RolePlay Server Rules, these rules are
                made to protect you, and rule the city!
              </p>
              <p className={styles.cardFooter}>
                <Link to="/rules">
                  <button className="button color-danger">
                    <FontAwesomeIcon icon={["fas", "scale-balanced"]} />
                    &nbsp;Read the rules
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
