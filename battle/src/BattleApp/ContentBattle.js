import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import '../css/content.css'
import dataDetails from "../data/dataDetail";

export default function ContentBattle({ id, name, idAge, img }) {
    return (
        <Col md={3} sm={6} className="list-item ">
            <Link to={"/battles/" + id} className='link-detail'>
                <div className="flip-box">
                    <div className="flip-box-front text-center">
                        <img src={img}></img>
                        <div className="inner color-white">
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="flip-box-back text-center">
                        <img src={img}></img>
                        <div className="inner color-white">
                            <p>{name}</p>
                            <Button variant="outline-dark" className="btn-detail">More detail</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}