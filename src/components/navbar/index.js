import React, { useEffect, useState } from "react";
import config from "../../config.json";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";

import styles from "./navbar.module.css";
import "../../index.css";

library.add(fas, far);

const Navbar = () => {
  const router = useLocation();
  const [isLogged, setIsLogged] = useState(
    () =>
      (localStorage.getItem("userData") &&
        JSON.parse(localStorage.getItem("userData")).login) ||
      false
  );
  const [sideIsOpen, setSideIsOpen] = useState(
    () => JSON.parse(localStorage.getItem("sidebar")) || false
  );
  const [playersCount, setPlayersCount] = useState(0);
  const [serverLocation, setServerLocation] = useState("dz");
  const [serverResources, setServerResources] = useState(0);
  const [maxPlayersCount, setMaxPlayersCount] = useState(0);
  const [serverIsOnline, setServerIsOnline] = useState(false);

  const handleLogout = () => {
    axios
      .get(config.backendURL + "/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        setIsLogged(false);
        localStorage.clear();
        window.location.href = "/";
      });
  };
  const handleLoginClick = () => {
    window.location.href = `${config.backendURL}/auth`;
  };
console.log(config.schema)
  useEffect(() => {
    axios
      .get(config.backendURL + "/users/getUserData", { withCredentials: true })
      .then((res) => {
        if (res.data.login) {
          if (localStorage.userData !== JSON.stringify(res.data)) {
            setIsLogged(true);
            localStorage.setItem("userData", JSON.stringify(res.data));
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(config.backendURL + "/users/getServerRoles", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          if (localStorage.serverRoles !== JSON.stringify(res.data)) {
            localStorage.setItem("serverRoles", JSON.stringify(res.data));
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(config.players).then((res) => {
      setPlayersCount(res.data.length);
    });
    axios.get(`http://ip-api.com/json/${config.serverIP}`).then((res) => {
      setServerLocation(res.data.countryCode);
    });
    axios.get(config.server).then((res) => {
      if (res.data) {
        setServerIsOnline(res.data.server.length > 0);
        setServerResources(res.data.resources.length);
        setMaxPlayersCount(res.data.vars.sv_maxClients);
      }
    });
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      if (sideIsOpen) {
        document.getElementsByTagName("main")[0].style.marginLeft = "9rem";
      } else {
        document.getElementsByTagName("main")[0].style.marginLeft = "5rem";
      }
    }
    localStorage.setItem("sidebar", JSON.stringify(sideIsOpen));
  }, [sideIsOpen, router.pathname]);

  return (
    <div className={styles.App}>
      <div className={styles.sideNav}>
        <input type="checkbox" className={styles.toggle} id="toggle" />
        <label
          className={`${styles.serverStatus} ${serverIsOnline ? "color-success" : "color-danger"
            }`}
          htmlFor="toggle"
        >
          <FontAwesomeIcon icon="fa-solid fa-exclamation" />
        </label>
        {serverIsOnline && (
          <div className={styles.serverStatusNav}>
            <ul>
              <p>
                Players: {playersCount}/{maxPlayersCount}
              </p>
              <p>Resources: {serverResources}</p>
              <p>
                Location:{" "}
                <img
                  src={`https://flagpedia.net/data/flags/icon/16x12/${serverLocation.toLowerCase()}.webp`}
                  alt={serverLocation}
                />
              </p>
              <button className="button color-success">Connect</button>
            </ul>
          </div>
        )}
      </div>
      <nav className={`${styles.navbar} ${sideIsOpen ? styles.open : ""}`}>
        <ul className={styles.navbarNav}>
          <li className={styles.logo}>
            <Link
              to="#"
              className={`${styles.navLink} ${styles.navLogo}`}
              onClick={() => setSideIsOpen(!sideIsOpen)}
            >
              <span className={`${styles.linkText} ${styles.logoText}`}>
                DZCREW RP
              </span>
              <FontAwesomeIcon icon="fa-solid fa-angles-right" />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/"
              className={
                router.pathname === "/"
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              <FontAwesomeIcon icon="fa-solid fa-house" size="lg" />
              <span className={styles.linkText}>Home</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/forum"
              className={
                router.pathname === "/forum"
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              <FontAwesomeIcon icon="fa-solid fa-list" size="lg" />
              <span className={styles.linkText}>Forum</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/rules"
              className={
                router.pathname === "/rules"
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              <FontAwesomeIcon icon="fa-solid fa-scale-balanced" size="lg" />
              <span className={styles.linkText}>Rules</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/guides"
              className={
                router.pathname === "/guides"
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              <FontAwesomeIcon icon="fa-solid fa-book" size="lg" />
              <span className={styles.linkText}>Guides</span>
            </Link>
          </li>
          {isLogged ? (
            <>
              <li className={styles.navItem}>
                <Link
                  to="/ticket"
                  className={
                    router.pathname === "/ticket"
                      ? `${styles.navLink} ${styles.active}`
                      : `${styles.navLink}`
                  }
                >
                  <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="lg" />
                  <span className={styles.linkText}>Open a ticket</span>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/dashboard"
                  className={
                    router.pathname === "/dashboard"
                      ? `${styles.navLink} ${styles.active}`
                      : `${styles.navLink}`
                  }
                >
                  <FontAwesomeIcon icon="fa-solid fa-user" size="lg" />
                  <span className={styles.linkText}>My Account</span>
                </Link>
              </li>
              <li className={styles.navItem}>
                <div
                  className={`${styles.navLink} color-danger`}
                  onClick={() => handleLogout()}
                >
                  <FontAwesomeIcon icon="fa-solid fa-sign-out" size="lg" />
                  <span className={styles.linkText}>Logout</span>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className={styles.navItem}></li>
              <li className={styles.navItem}>
                <span
                  onClick={() => handleLoginClick()}
                  className={`${styles.navLink} color-success`}
                >
                  <FontAwesomeIcon icon="fa-solid fa-sign-in" size="lg" />
                  <span className={styles.linkText}>Sign-in</span>
                </span>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="background"></div>
    </div>
  );
};

export default Navbar;
