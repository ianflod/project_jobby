import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";




const Login = ({ users, getLoggedInUser }) => {


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

        <div className="Login">

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

                <Button block size="lg" type="submit" disabled={!validateForm()}>

                    Login

                </Button>

            </Form>

        </div>

    );

}

export default Login;