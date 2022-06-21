import Axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import styles from "./viewticket.module.css";
import config from "../../config.json";


const ViewTicket = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const { id: discordId, avatar, username } = userData;
    const profilePicture = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.webp?size=1024`;

    const { id } = useParams();
    const [ticket, setTicket] = useState({});
    const [isFound, setIsFound] = useState(false);

    const [sender, setSender] = useState({});
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        Axios.get(`http://45.146.254.137:3001/api/tickets/${id}`, {
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

    const submitReply = async (e) => {
        e.preventDefault();
        const data = inputs;
        await Axios({
            method: "PATCH",
            url: `${config.backendURL}/tickets/${id}`,
            data,
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        }).then(() => {
            Swal.fire({
                title: "Reply added successfully",
                icon: "success",
                confirmButtonText: "Ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementsByTagName("form")[0].reset();
                }
            });
        })
    }

    return (
        isFound ?
            <Layout>
                <div className={styles.container}>
                    <ul className={styles.commentSection}>
                        <div className={styles.ticketInformation}>
                            <p><span>ID:</span> #{id}</p>
                            <p><span>Creator:</span> {sender.username}</p>
                        </div>
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
                                                {reply.message}<br /><br />
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
                            <form onSubmit={submitReply}>
                                <textarea placeholder="Write your comment here" onChange={handleChange} name="comment"></textarea>
                                <div className={styles.commentFooter}>
                                    <div>
                                        <img src={profilePicture} width="64px" alt={username} title={username} /> {username}
                                    </div>
                                    <div>
                                        <input type="checkbox" name="close" onChange={handleChange} /><span>Close Ticket</span>
                                        <button type="submit">Submit</button>
                                    </div>
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
