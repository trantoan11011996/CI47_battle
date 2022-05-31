import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Button, Modal,Col,Row } from 'react-bootstrap';
import '../css/register.css'
import { v4 as uuidv4 } from 'uuid';
import { AuthContext, generateInitUser, getUsers } from './user';
import {useNavigate,Link,useParams} from "react-router-dom"




export default function Register() {

    const [show, setShow] = useState(true)
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const navigate = useNavigate()
    // const auth = useContext(AuthContext)
    // let users = auth.users
    const [data,setData] = useState(getUsers())
    const creatUser = (e) => {
        let newUser = {
            id : uuidv4(),
            name:username,
            email : email,
            password:pass,
        }
        setUsername('')
        setEmail('')
        setPass('')
        setFirstname('')
        setLastname('')
        const userData = ([...data,newUser])
        localStorage.setItem('users',JSON.stringify(userData))
        // auth.setUsers(userData)
        navigate('/')
        
    }

    return (<Container className="register-page ">
        <Modal show={show} className='register'>
                <Form  className="bg-white p-3 border rounded shadow-sm register-form " onSubmit={creatUser}>
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
                            <Col><Form.Check type='radio' name='gender' label='nữ'></Form.Check></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label  className='label-form'>
                            Tên Đăng Ký
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên đăng ký" autoFocus onChange={(event)=>setUsername(event.target.value)}>
                        </Form.Control>
                        <Form.Text className='text-danger' >Tên Đăng Ký không được bỏ trống</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label  className='label-form'>Email</Form.Label>
                        <Form.Control type='email' placeholder="Email" autoFocus onChange={(event)=>setEmail(event.target.value)}></Form.Control>
                        <Form.Text className='text-danger'>Email không được bỏ trống</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label  className='label-form'>Mật khẩu</Form.Label>
                        <Form.Control type='password' placeholder="Mật khẩu" autoFocus onChange={(event=>setPass(event.target.value))}></Form.Control>
                        <Form.Text className='text-danger'>Mật khẩu không được bỏ trống</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label  className='label-form'>Xác nhận mật khẩu</Form.Label>
                        <Form.Control type='password' placeholder="Mật khẩu" autoFocus></Form.Control>
                        <Form.Text className='text-danger'>Mật khẩu không được bỏ trống</Form.Text>
                    </Form.Group>
                    <Button type='submit' variant="primary">Register</Button>
                </Form>
        </Modal>
        <Link to={"/"}>
         <Button className='btn-register-home'>Home page</Button>
        </Link>

    </Container>);
}