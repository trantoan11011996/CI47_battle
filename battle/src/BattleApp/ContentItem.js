import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import '../css/content.css'
import dataDetails from "../data/dataDetail";

export default function ContentItem({ id, name, idAge }) {
    console.log(id)
    return (
        <Col md={3} sm={6} className="list-item">
            <Link to={"/ages/" + idAge + "/battles/" + id} className='link-detail'>
                <Row className="item">
                    <Col className="item-img" md={12}>
                        <h1>alo</h1>
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