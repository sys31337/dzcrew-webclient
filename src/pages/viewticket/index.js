import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import styles from "./viewticket.module.css";


const ViewTicket = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const { id: discordId, avatar, roles, username } = userData;
    const profilePicture = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.webp?size=1024`;
    const serverRoles = JSON.parse(localStorage.getItem("serverRoles"));
    const playerRoles = serverRoles.filter((p) => roles.includes(p.roleId));

    const { id } = useParams();
    const [ticket, setTicket] = useState({});
    const [isFound, setIsFound] = useState(false);
    useEffect(() => {
        axios.get(`http://45.146.254.137:3001/api/tickets/${id}`, {
            withCredentials: true,
        }).then((res) => {
            if (res.data) {
                console.log(res.data)
                setTicket(res.data);
                setIsFound(true)
            }
        }
        );
    }, [id]);
    return (
        isFound ?
            <Layout>
                <div className={styles.container}>
                    <ul className={styles.commentSection}>
                        <li className={`${styles.comment} ${styles.userComment}`}>
                            <div className={`${styles.contentContainer} ${styles.firstContainer}`}>
                                <div className={styles.ticketSender}>
                                    <div className={styles.playerInfo}>
                                        <div className={styles.avatar} href="/">
                                            <img src={profilePicture} width="64px" alt={username} title={username} />
                                        </div>
                                        <span className={styles.playerInfoName} style={{ color: playerRoles[0].color }}>PlayerName</span>
                                        <span className={styles.ticketStarter}>Starter</span>
                                    </div>
                                </div>
                                <p className={styles.commentContent}>{ticket.message}</p>
                            </div>
                        </li>
                        {ticket.replies.map((reply, id) => {
                            return (
                                reply.isStaff ?
                                    <li className={`${styles.comment} ${styles.staffComment}`} key={id}>
                                        <div className={styles.staffContentContainer}>
                                            <div className={styles.ticketSender}>
                                                <div className={styles.playerInfo}>
                                                    <div className={styles.avatar} href="/">
                                                        <img src={`https://cdn.discordapp.com/avatars/${reply.sender.discordId}/${reply.sender.avatar}.webp?size=1024`} width="64px" alt="Profile Avatar" title="Jack Smith" />
                                                    </div>
                                                    <span className={styles.playerInfoName} style={{ color: playerRoles[0].color }}>PlayerName</span>
                                                    <span className={styles.staffReplyInfo}>STAFF</span>
                                                </div>
                                            </div>
                                            <p className={styles.staffCommentContent}>{ticket.message}</p>
                                        </div>
                                    </li> : <li className={`${styles.comment} ${styles.userComment}`} key={id}>
                                        <div className={styles.contentContainer}>
                                            <div>
                                                <div className={styles.playerInfo}>
                                                    <div className={styles.avatar} href="/">
                                                        <img src={`https://cdn.discordapp.com/avatars/${reply.sender.discordId}/${reply.sender.avatar}.webp?size=1024`} width="64px" alt="Profile Avatar" title="Jack Smith" />
                                                    </div>
                                                    <span className={styles.playerInfoName} style={{ color: playerRoles[0].color }}>PlayerName</span>
                                                    <span className={styles.ticketStarter}>Starter</span>
                                                </div>
                                            </div>
                                            <p className={styles.commentContent}>{ticket.message}</p>
                                        </div>
                                    </li>
                            )
                        })}

                        <h3>Write a reply:</h3>
                        <li className={styles.writeNew}>
                            <form action="/" method="post">
                                <textarea placeholder="Write your comment here" name="comment"></textarea>
                                <div>
                                    <img src={profilePicture} width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </Layout >
            :
            <Layout>
                <div className={styles.container}>
                    <h1>No data yet..</h1>
                </div>
            </Layout>
    );
}

export default ViewTicket;
