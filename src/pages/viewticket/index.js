import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import styles from "./viewticket.module.css";


const ViewTicket = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const { id: discordId, avatar, username } = userData;
    const profilePicture = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.webp?size=1024`;

    const { id } = useParams();
    const [ticket, setTicket] = useState({});
    const [isFound, setIsFound] = useState(false);
    const [sender, setSender] = useState({});
    useEffect(() => {
        axios.get(`http://45.146.254.137:3001/api/tickets/${id}`, {
            withCredentials: true,
        }).then((res) => {
            if (res.data) {
                console.log(res.data)
                setTicket(res.data);
                setSender(res.data.sender)
                setIsFound(true);
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
                                <div className={styles.playerInfoContainer}>
                                    <div className={styles.playerInfo}>
                                        <div className={styles.avatar}>
                                            <img src={`https://cdn.discordapp.com/avatars/${sender.discordId}/${sender.avatar}.webp?size=1024`} width="64px" alt={sender.username} title={sender.username} />
                                        </div>
                                        <span className={styles.playerInfoName} style={{ color: 'var(--color-grass)' }}>{sender.username}</span>
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
                                            <div className={styles.playerInfoContainer}>
                                                <div className={styles.playerInfo}>
                                                    <div className={styles.avatar} href="/">
                                                        <img src={`https://cdn.discordapp.com/avatars/${reply.sender.discordId}/${reply.sender.avatar}.webp?size=1024`} width="64px" alt="Profile Avatar" title="Jack Smith" />
                                                    </div>
                                                    <span className={styles.playerInfoName} style={{ color: 'var(--color-salmon)' }}>{reply.sender.username}</span>
                                                    <span className={styles.staffReplyInfo}>STAFF</span>
                                                </div>
                                            </div>
                                            <p className={styles.staffCommentContent}>
                                                Greetings <b>{sender.username},</b> <br /><br />
                                                {ticket.message}<br /><br />
                                                Sincerely.<br />
                                                <b>Dz-Crew RolePlay Staff</b>
                                            </p>
                                        </div>
                                    </li> : <li className={`${styles.comment} ${styles.userComment}`} key={id}>
                                        <div className={styles.contentContainer}>
                                            <div className={styles.playerInfoContainer}>
                                                <div className={styles.playerInfo}>
                                                    <div className={styles.avatar} href="/">
                                                        <img src={`https://cdn.discordapp.com/avatars/${reply.sender.discordId}/${reply.sender.avatar}.webp?size=1024`} width="64px" alt="Profile Avatar" title="Jack Smith" />
                                                    </div>
                                                    <span className={styles.playerInfoName} style={{ color: 'var(--color-grass)' }}>{reply.sender.username}</span>
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
                                    <img src={profilePicture} width="35" alt={username} title={username} /> {username}
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
