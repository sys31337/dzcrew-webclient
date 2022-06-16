import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layout";

const ViewTicket = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState({});
    // const [comments, setComments] = useState([]);
    const [isFound, setIsFound] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/tickets/${id}`).then((res) => {
            if (res.data) {
                setTicket(res.data);
                setIsFound(true)
            }
        }
        );
    }, [id]);
    return (
        isFound ?
            <Layout>
                <div className="container">
                    <div className="ticket">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title">{ticket.title}</h5>
                                <div className="badge bg-blue center qs">
                                    <span className="popover above">Hey bro, cool popover!</span>
                                </div>
                            </div>
                            <p className="card-text">
                                {ticket.content}
                            </p>
                            <Link to={`/viewticket/${ticket._id}`} state={ticket} className="button bg-alge">View Ticket</Link>
                            <p className="card-footer">

                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
            :
            <Layout>
                <div className="container">
                    <h1>xxx</h1>
                </div>
            </Layout>
    );
}

export default ViewTicket;
