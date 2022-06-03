import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import '../css/content.css'
import dataDetails from "../data/dataDetail";

export default function ContentBattle({ id, name, idAge,img }) {
    return (
        <Col md={3} sm={6} className="list-item">
            <Link to={"/battles/" + id} className='link-detail'>
                <Row className="item">
                    <Col className="item-img" md={12}>
                        <img className="img" src={img}></img>
                    </Col>
                    <Col md={12} className="item-name">
                        <p>{name}</p>
                    </Col>
                    <Button variant="outline-dark" className="btn-detail">More detail</Button>
                </Row>
            </Link>
        </Col>
    )
}