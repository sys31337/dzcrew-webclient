import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Axios from "axios";
import Swal from 'sweetalert2'

import "./style.css";

const Form = () => {
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        document.querySelector("html").classList.add('js');

        const fileInput = document.querySelector(".input-file"),
            button = document.querySelector(".input-file-trigger"),
            the_return = document.querySelector(".file-return");

        button.addEventListener("keydown", function (event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                fileInput.focus();
            }
        });
        button.addEventListener("click", function (event) {
            fileInput.focus();
            return false;
        });
        fileInput.addEventListener("change", function (event) {
            var filesList = ''
            Array.from(this.files).forEach(file => {
                filesList += `<li class="uploaded-item">${file.name}</li>`;
            });
            the_return.innerHTML = filesList;

        });
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const imagefile = document.querySelector('input[type="file"]');

        Axios.post("http://localhost:5000/api/posts", { ...inputs, attachments: [...imagefile.files] }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res.data)
            Swal.fire({
                title: 'Post added successfully',
                icon: 'success',
                html:
                    `<p><b>Title</b> ${res.data.title}</p>` +
                    `<p><b>Author</b> ${res.data.author.firstName} ${res.data.author.lastName}</p>`,
                confirmButtonText: 'Ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementsByTagName('form')[0].reset();
                }
            })

        });
    }

    return (
        <Layout>
            <div className="container">
                <h1>Form</h1>
                <div className="form-container">
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <div className="input-login">
                            <input
                                type="text"
                                name="title"
                                className="border-0-login form-control-login input-border-none"
                                placeholder="Title"
                                onChange={handleChange}
                            />
                        </div><br />
                        <div className="input-login">
                            <input
                                type="email"
                                name="author"
                                className="border-0-login form-control-login input-border-none"
                                placeholder="Author"
                                onChange={handleChange}
                            />
                        </div><br />
                        <div className="input-login">
                            <textarea
                                name="content"
                                type="text"
                                className="border-0-login form-control-textarea input-border-none"
                                rows="5"
                                onChange={handleChange}
                                placeholder="Content">
                            </textarea>
                        </div><br />
                        <div className="input-login" style={{ flexDirection: 'column' }}>
                            <div className="input-file-container">
                                <input className="input-file" id="my-file" name="attachments" type="file" multiple />
                                <label tabIndex="0" htmlFor="my-file" className="input-file-trigger">Attach files...</label>
                            </div>
                        </div><br />
                        <div>
                            <ul className="file-return"></ul>
                        </div><br />
                        <p className="text-center">
                            <button type="submit" className="button-signup fondo-color-signup">
                                SEND
                            </button>
                        </p>
                        <div className="icons-position">
                            <a href="/" className="icon-social">
                                <p className="text-center">
                                    a
                                </p>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default Form;