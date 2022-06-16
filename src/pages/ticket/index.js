import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import styles from "./ticket.module.css";
import config from "../../config.json";
import { Link } from "react-router-dom";
library.add(fab, fas);

const Ticket = () => {
  const [inputs, setInputs] = useState({ staff: "any" });
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    document.querySelector("html").classList.add(`${styles.js}`);
    Axios.get(`${config.backendURL}/tickets/current`, {
      withCredentials: true,
    }).then((res) => {
      setTickets(res.data);
    });
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagefile = document.querySelector('input[type="file"]');
    await Axios({
      method: "post",
      url: `${config.backendURL}/tickets`,
      data: { ...inputs, attachments: [...imagefile.files] },
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    }).then((res) => {
      Swal.fire({
        title: "Post added successfully",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementsByTagName("form")[0].reset();
        }
      });
    });
  };

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>
            <img src="logo.png" width="250px" alt="Logo" />
          </h1>
          <div className={styles.holder}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h2>Submit a ticket</h2>
              <div className={styles.largeGroup}>
                <div className={styles.smallGroup}>
                  <label htmlFor="subject">
                    <FontAwesomeIcon icon={["fas", "ellipsis"]} />
                  </label>
                  <input
                    id="subject"
                    className={styles.input}
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className={styles.smallGroup}>
                  <label htmlFor="staff">
                    <FontAwesomeIcon icon={["fas", "person-dots-from-line"]} />
                  </label>
                  <select
                    name="staff"
                    className={styles.select}
                    onChange={(event) =>
                      setInputs((values) => ({
                        ...values,
                        staff: event.target.value,
                      }))
                    }
                  >
                    <option value="any">Any staff available</option>
                    <option value="owners">Owners</option>
                    <option value="developers">Developers</option>
                    <option value="managers">Managers</option>
                    <option value="admins">Admins</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                <div className={styles.textareaDiv}>
                  <label htmlFor="message">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </label>
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Your message (minimum length 50 letters)"
                    onChange={handleChange}
                    required
                    minLength={10}
                  ></textarea>
                </div>
                <div
                  className={styles.inputLogin}
                  style={{ flexDirection: "column" }}
                >
                  <input
                    className={styles.inputFile}
                    id="myFile"
                    name="attachments"
                    type="file"
                    multiple
                  />
                  <div className={styles.inputFileContainer}>
                    <label htmlFor="message">
                      <FontAwesomeIcon icon={["fas", "paperclip"]} />
                    </label>
                    <label
                      tabIndex="0"
                      htmlFor="myFile"
                      id="inputFileTrigger"
                      className={styles.inputFileTrigger}
                    >
                      Attach files...
                    </label>
                  </div>
                </div>
                <br />
                <div>
                  <ul className={styles.fileReturn} id="fileReturn"></ul>
                </div>
                <input
                  id="submit"
                  className={`${styles.btn} color-success`}
                  type="submit"
                  name="submit"
                />
              </div>
            </form>
            <div className={styles.tickets}>
              <h2>Tickets</h2>
              <div>
                {tickets && (
                  <div>
                    {tickets.map((ticket, key) => {
                      var colors = {
                        processed: "var(--color-grass)",
                        processing: "var(--color-sun)",
                        new: "var(--color-ocean)",
                      };
                      const ss = ticket.status;
                      const status = ss.replace(
                        /processed|processing|new/gi,
                        (obj) => {
                          return colors[obj];
                        }
                      );
                      return (
                        <Link to={`/viewticket/${ticket._id}`}>
                          <div className={styles.ticket} key={key}>
                            <span style={{ color: status }}>
                              <FontAwesomeIcon icon={["fas", "circle"]} />
                            </span>
                            <p
                              className={styles.title}
                            >{`${ticket.subject}`}</p>
                            <p
                              className={styles.replies}
                            >{`Replies: ${ticket.replies.length}`}</p>
                            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Ticket;
