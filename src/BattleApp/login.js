import React, { useContext } from "react";
import { Modal, Form, Col, Row, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { AuthContext, login } from "./user";
import "../css/login.css"
import { useNavigate,Link } from "react-router-dom";

export default function Login({setUser}) {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const handleLoginForm = (event) => {
        event.preventDefault();

        if (!email) setEmailError('Nhập vào email');
        if (!password) setPasswordError('Nhập vào mật khẩu');

        if (email && password) {
            const user = login(email, password);

            if (!user) {
                setEmailError('Email hoặc mật khẩu không chính xác');
            } else {
                navigate("/")
                auth.setCurrentUser(user)
                // setUser(user)
            }
        }
    }
    const [show, setShow] = useState(true)

    return (<Container className="login-page">
        <Modal show={show} className='login'>
                <Form className="bg-white p-3 border rounded shadow-sm login-form" onSubmit={handleLoginForm}>
                    <h2 className="text-center form-header text-dark">Login to your account</h2>

                    <Form.Group className="mb-3">
                    <Form.Label className='label-form text-dark'>
                         Email đăng nhập
                    </Form.Label>
                        <Form.Control type="text" onChange={(event) => setEmail(event.target.value)} />
                        <div className="text-danger">{emailError}</div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="label-form text-dark">Password</Form.Label>
                        <Form.Control type="password" onChange={(event) => setPassword(event.target.value)} />
                        <div className="text-danger">{passwordError}</div>
                    </Form.Group>
                    <Button type="submit" variant="primary">Login</Button>
                </Form>
        </Modal>
        <Link to={"/"}>
         <Button className='btn-login-home'>Home page</Button>
        </Link>
    </Container>);
}
