import React, { useState } from "react";

import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";




const Login = ({ users, getLoggedInUser, loggedInUser }) => {
    if (loggedInUser.email === null) {
        return (
            <>
                <h2>You are already logged in {loggedInUser.firstName}</h2>
                <p>Would you like to logout?</p>
                <Link to="/logout"></Link>
            </>
        );

    }
    else {
        const [email, setEmail] = useState("");

        const [password, setPassword] = useState("");

        const validateForm = () => {

            return email.length > 0 && password.length > 0;

        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(email)
            const userFind = users.find(user => user.password === password);
            console.log(userFind);
            if (userFind) {
                getLoggedInUser(userFind)
            }
            else {
                console.log("error wrong details");
            }

        }





        return (

            <div className="flex-container container-top-padding">

                <Form onSubmit={handleSubmit}>

                    <Form.Group size="lg" controlId="email">

                        <Form.Label>Email</Form.Label>

                        <Form.Control

                            autoFocus

                            type="email"

                            value={email}

                            onChange={(e) => setEmail(e.target.value)}

                        />

                    </Form.Group>

                    <Form.Group size="lg" controlId="password">

                        <Form.Label>Password</Form.Label>

                        <Form.Control

                            type="password"

                            value={password}

                            onChange={(e) => setPassword(e.target.value)}

                        />

                    </Form.Group>

                    <button className="button-general" block size="lg" type="submit" disabled={!validateForm()}>

                        Login

                    </button>

                </Form>

            </div>

        );

    }
}

export default Login;