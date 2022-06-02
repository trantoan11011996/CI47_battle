import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, NavItem, ListGroup, ListGroupItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "../css/content.css"
import { filterBattleByName, getAllDataHistory, getDataAge } from "../data/dataDetail";
import ContentItem from "./ContentItem";
import ContentSidebar from "./ContentSidebar";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import dataHistory from "../data/dataDetail";

export default function Content({ image, content, imgItem, name }) {

    const [activeItem, setActiveItem] = useState()
    const [agesList, setAgesList] = useState([])
    const [currentAge, setCurrentAge] = useState(null)

    useEffect(() => {
        let data = getAllDataHistory()
        setAgesList(data)
    }, [])


    const setItem = (item) => {
        setCurrentAge(item)
    }


    const setAll = () => {
        setCurrentAge(null)
    }
    
    const [keyword, setKeyWord] = useState('');
    const result = keyword ? filterBattleByName(keyword) : agesList;

    return (
        <Container fluid className="container-content">
            <Slider />
            <Row className="content-item">
                <Col className="col-sidebar" md={3}>
                    <ListGroup variant="flush" className="d-sm-none list-sidebar d-md-block">
                        <h1 className="sidebar-header">Timeline</h1>
                        <ListGroup.Item action className="item-sidebar" onClick={setAll}>All</ListGroup.Item>
                        {result.map((item) => {
                            return (
                                <ListGroup.Item key={item.id} onClick={() => setItem(item)} action className={activeItem === item.id ? "active-sidebar item-sidebar" : 'none-active-sidebar item-sidebar'} >{item.age}</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    <NavDropdown action title="Timeline" className="-none d-sm-block d-md-none">
                        <NavDropdown.Item className="item-sidebar" onClick={setAll}>All</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {result.map((item) => {
                            return (
                                <NavDropdown.Item key={item.id} action onClick={() => setItem(item)} >{item.age}</NavDropdown.Item>
                            )
                        })}
                    </NavDropdown>
                </Col>
                <Col className="col-content" md={9}>
                    <Container className="container-content">
                        {currentAge &&
                            <div>
                                <Row>
                                    <Col md={6} ms={12} className="ms-auto mr-3">
                                        <Form className="d-flex ">
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                                onChange={(event) => setKeyWord(event.target.value)}
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row className="content">
                                    <Row className="shadow-sm">
                                        <Col md={12}>
                                            banner
                                        </Col>
                                        <Col>
                                            nội dung banner từng cái
                                        </Col>
                                    </Row>
                                    <Row className="container-item">
                                        {currentAge.battles.map((item) => {
                                            return (
                                                <ContentItem key={item.id} name={item.name} age={currentAge} id={item.idBattles} idAge={currentAge.id} />
                                            )
                                        })}
                                    </Row>
                                </Row>
                            </div>}
                        {!currentAge &&
                            <div>
                                <Row>
                                    <Col md={6} ms={12} className="ms-auto mr-3">
                                        <Form className="d-flex ">
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                                onChange={(event) => setKeyWord(event.target.value)}
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row className="content">
                                    <Row className="shadow-sm">
                                        <Col md={12}>
                                            banner
                                        </Col>
                                        <Col>
                                            nội dung banner tất cảitem
                                        </Col>
                                    </Row>
                                    <Row className="container-item">
                                        <>
                                            {result.map((item) => {
                                                return (
                                                        <Col key={item.id} md={3} sm={6} className="list-age">
                                                            <Row className="item">
                                                                <Col className="item-img" md={12}>
                                                                    <img className='img'></img>
                                                                </Col>
                                                                <Col md={12} className="item-name">
                                                                    <p>{item.age}</p>
                                                                </Col>
                                                                <Link className="link-btn" to={"/detail/"}>
                                                                    <Button variant="outline-dark" className="btn-detail">More detail</Button>
                                                                </Link>
                                                            </Row>
                                                        </Col>
                                                )
                                            })}
                                        </>
                                    </Row>
                                </Row>
                            </div>}
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}