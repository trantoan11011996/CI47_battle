import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Form, Button, Modal, Col, Row } from 'react-bootstrap';
import '../css/register.css'
import { v4 as uuidv4 } from 'uuid';
import { AuthContext, generateInitUser, getUsers } from './user';
import { useNavigate, Link, useParams } from "react-router-dom"
import validator from 'validator'
import RequiredPass from './requiredPass';
import RequiredUser from './requiredUser';



export default function Register() {

    const [show, setShow] = useState(true)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const [required, setRequired] = useState(false)
    const [requiredUser, setRequiredUser] = useState(false)
    const [checkPass, setCheckPass] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdlengthCheck: false,
        specialCharCheck: false,
    })
    const [checkUser, setCheckUser] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdlengthCheck: false,
    })
    const navigate = useNavigate()

    const [data, setData] = useState(getUsers())
    const creatUser = (e, value) => {
        e.preventDefault()
        let newUser = {
            id: uuidv4(),
            name: username,
            email: email,
            password: pass,
        }
        if (pass != confirmPass) {
            setErrorMessage(true)
            return
        }
        setErrorMessage(false)
        setUsername('')
        setEmail('')
        setPass('')
        setFirstname('')
        setLastname('')
        const userData = ([...data, newUser])
        localStorage.setItem('users', JSON.stringify(userData))
        // auth.setUsers(userData)
        navigate('/')

    }
    const handleFocus = () => {
        setRequired(true)
    }
    const handleBlur = () => {
        setRequired(false)
    }
    const handleOnkeyup = (e) => {
        const { value } = e.target;
        const capsLetterCheck = /[A-Z]/.test(value)
        const numberCheck = /[0-9]/.test(value)
        const pwdlengthCheck = value.length >= 6
        const specialCharCheck = /[!@#$%^&*]/.test(value)
        setCheckPass({
            capsLetterCheck,
            numberCheck,
            pwdlengthCheck,
            specialCharCheck,
        })
    }

    const handleFocusUser = () => {
        setRequiredUser(true)
    }
    const handleBlurUser = () => {
        setRequiredUser(false)
    }
    const handleOnkeyupUser = (e) => {
        const { value } = e.target;
        const capsLetterCheck = /[A-Z]/.test(value)
        const numberCheck = /[0-9]/.test(value)
        const pwdlengthCheck = value.length >= 6
        setCheckUser({
            capsLetterCheck,
            numberCheck,
            pwdlengthCheck,
        })
    }

    return (<Container className="register-page ">
        <Modal show={show} className='register'>
            <Form className="bg-white p-3 border rounded shadow-sm register-form " onSubmit={creatUser}>
                <h2 className="text-center">Create an account</h2>
                <Form.Group>
                    <Form.Label className='label-form'> Họ Và Tên</Form.Label>
                    <Row>
                        <Col><Form.Control type='text' placeholder="Họ"></Form.Control></Col>
                        <Col><Form.Control type='text' placeholder="Tên"></Form.Control></Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='label-form'> Giới tính </Form.Label>
                    <Row>
                        <Col><Form.Check type='radio' name='gender' label='nam'></Form.Check></Col>
                        <Col><Form.Check type='radio' name='gender' label='nữ' ></Form.Check></Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='label-form'>
                        Tên Đăng Ký
                    </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên đăng ký"
                        autoFocus
                        onBlur={handleBlurUser}
                        onFocus={handleFocusUser}
                        onKeyUp={handleOnkeyupUser}
                        onChange={(event) => setUsername(event.target.value)}
                    >
                    </Form.Control>
                     {requiredUser ? <RequiredUser
                        capsLetterFlag={checkUser.capsLetterCheck ? "valid" : "invalid"}
                        numberFlag={checkUser.numberCheck ? "valid" : "invalid"}
                        pwdLengthFlag={checkUser.pwdlengthCheck ? "valid" : "invalid"}
                        /> : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label className='label-form'>Email</Form.Label>
                    <Form.Control required type='email' placeholder="Email" autoFocus onChange={(event) => setEmail(event.target.value)}></Form.Control>
                    <Form.Text className='text-danger'>Email không được bỏ trống</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='label-form'>Mật khẩu</Form.Label>
                    <Form.Control required
                        type='password'
                        placeholder="Mật khẩu"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyUp={handleOnkeyup}
                        onChange={(event) => setPass(event.target.value)}
                    ></Form.Control>
                    {required ? <RequiredPass
                        capsLetterFlag={checkPass.capsLetterCheck ? "valid" : "invalid"}
                        numberFlag={checkPass.numberCheck ? "valid" : "invalid"}
                        pwdLengthFlag={checkPass.pwdlengthCheck ? "valid" : "invalid"}
                        specialCharFlag={checkPass.specialCharCheck ? "valid" : "invalid"} /> : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label className='label-form'>Xác nhận mật khẩu</Form.Label>
                    <Form.Control required type='password' placeholder="Mật khẩu" autoFocus onChange={(event) => setConfirmPass(event.target.value)}></Form.Control>
                </Form.Group>
                {errorMessage && (<Form.Text className='text-danger'>Mật khẩu không giống nhau</Form.Text>)}
                <Button type='submit' variant="primary" className='mt-3'>Register</Button>
            </Form>
        </Modal>
        <Link to={"/"}>
            <Button className='btn-register-home'>Home page</Button>
        </Link>

    </Container>);
}