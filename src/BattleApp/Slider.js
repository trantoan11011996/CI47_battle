import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "../css/slide.css"
import BtnSlider from "./BtnSlider";
import { getAllDataHistory } from "../data/dataDetail";

export default function Slider() {
    const [data, setData] = useState(getAllDataHistory)





    return (
        <Container fluid className="slider">
            <Carousel fade variant="light">
                {data.map((item) => {
                    return item.battles.map((itemBatle) => {
                        return (
                            <Carousel.Item >
                                <Link to={"/ages/" + item.id + "/battles/" + itemBatle.idBattles} className='link-detail'>
                                    <img
                                        className="d-block w-100 img-slide-header"
                                        alt="First slide"
                                        src={itemBatle.img_age}
                                    />
                                    <Carousel.Caption className="carousel_container">
                                        <h1 className="slider-header">{itemBatle.name}</h1>
                                        <Button variant="info">More detail</Button>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                        )
                    })
                })}
            </Carousel>
        </Container>
    )
}