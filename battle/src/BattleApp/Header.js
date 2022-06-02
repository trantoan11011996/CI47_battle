import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Offcanvas, Row } from "react-bootstrap"
import "../css/header.css"
import Resigter from "./register";
import Login from "./login";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "./user";
import { RemoveUser } from "./user";

export default function Header() {
    const activeClassName = ({ isActive }) => isActive ? "nav-link text-primary" : "nav-link";
    const auth = useContext(AuthContext)


    const removeItem = () => {
        RemoveUser()
        auth.setCurrentUser(null)
    }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar fixed="top" key={expand} expand={expand} className="mb-3 padding_navbar navbar-header" >
                    <Container fluid>
                        <Navbar.Brand className={activeClassName}>
                            <NavLink to="/">HistoryBattle</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {auth.currentUser ?
                                    <>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                            <NavDropdown className={activeClassName}
                                                title={auth.currentUser.name}
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            >
                                                <NavDropdown.Item>
                                                    <NavLink to="/login">
                                                        {auth.currentUser.email}
                                                    </NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item>
                                                    <NavLink to="/" onClick={removeItem}>
                                                        Logout
                                                    </NavLink>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                        <Form className="d-flex">
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </> :

                                    <>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                            <NavLink className={activeClassName} to="/register">Register</NavLink>
                                            <NavDropdown className={activeClassName}
                                                title="Login"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            >
                                                <NavDropdown.Item>
                                                    <NavLink to="/login">
                                                        User
                                                    </NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item>
                                                    <NavLink to="/login">
                                                        Admin
                                                    </NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item >
                                                    Something else here
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                        <Form className="d-flex">
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </>}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    )
}