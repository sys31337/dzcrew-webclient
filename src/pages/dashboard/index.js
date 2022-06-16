import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from "./dashboard.module.css";
import config from "../../config.json";

library.add(fab, fas);

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const serverRoles = JSON.parse(localStorage.getItem("serverRoles"));
  const { id, avatar, joinDate, roles, username } = userData;
  const [isBanned, setIsBanned] = useState(false);
  const profilePicture = `https://cdn.discordapp.com/avatars/${id}/${avatar}.webp?size=1024`;
  const playerRoles = serverRoles.filter((p) => roles.includes(p.roleId));

  useEffect(() => {
    playerRoles.some((item) => item.roleId === config.banRole) &&
      setIsBanned(true);
  }, [playerRoles]);

  return (
    <Layout>
      <main className={styles.body}>
        <div className={styles.profile}>
          <div
            className={styles.profileBg}
            style={{ backgroundImage: `url(${profilePicture})` }}
          ></div>
          <section className={styles.containerPink}>
            <aside
              className={styles.profileImage}
              style={{
                backgroundImage: `url(${profilePicture})`,
                boxShadow: `0 25px 45px -20px ${playerRoles[0].color}, inset 0 0px 120px ${playerRoles[0].color}`,
              }}
            ></aside>
            <section className={styles.profileInfo}>
              <h2 style={{ color: playerRoles[0].color }}>{username}</h2>
              <p>
                Joined on:{" "}
                <span style={{ color: "var(--color-salmon)" }}>
                  {new Date(joinDate).toDateString()}
                </span>
              </p>
              <p>
                Ban Status:{" "}
                {isBanned ? (
                  <span style={{ color: "var(--color-salmon)" }}>Banned</span>
                ) : (
                  <span style={{ color: "var(--color-grass)" }}>
                    Whitelisted
                  </span>
                )}
              </p>
              <h4>Roles:</h4>
              <ul className={styles.rolesHolder}>
                {playerRoles.map((role, id) => {
                  return (
                    <li
                      className={styles.role}
                      style={{ color: role.color }}
                      key={id}
                    >
                      <FontAwesomeIcon icon={["fas", "circle"]} /> {role.name}
                    </li>
                  );
                })}
              </ul>
            </section>
          </section>
          <section className={styles.statistics}>
            <p>
              <strong>29</strong> Followers
            </p>
            <p>
              <strong>29</strong> Followers
            </p>
            <p>
              <strong>100</strong> Following
            </p>
            <p>
              <strong>6</strong> Likes
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Dashboard;
