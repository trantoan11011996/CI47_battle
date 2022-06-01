import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Carousel, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { getAgebyId, getBattlebyId } from "../data/dataDetail";


import "../css/detail.css"
import { AuthContext } from "../data/dataDetail";



export default function DetailHistory() {
    const { ageId, battleId } = useParams()
    const [battle, setBattle] = useState({})
    const [battleDev, setBattleDev] = useState([])
    const [battleNation, setBattleNation] = useState([])


    useEffect(() => {
        const detail = getBattlebyId(ageId, battleId)
        setBattle(detail)
    }, [ageId, battleId])
    const detailDevelopment = getBattlebyId(ageId, battleId)
    const detailNation = getBattlebyId(ageId, battleId)
    console.log(battle)

    return (
        <Container className="history-container border item-detail">
            <Container>
                <Container className="item-detail">
                    <Row className="text-center"><h3> Tên trận đánh: {battle.name}</h3></Row>
                    <Row className="text-center">
                        <h1>Ngày bắt đầu : {battle.start} - Ngày kết thúc : {battle.end}</h1>
                    </Row>
                    <Row>
                        <Col className="text-center"> hình ảnh 1 {battle.img_1}</Col>
                    </Row>

                    <Row className="text-center"><h3> Mô tả: </h3> </Row>

                    <Row className="text-center "> {battle.background_1} {battle.background_2} {battle.background_3}</Row>

                    <Row>
                        <Col className="text-center m-4 "><h3>___________________________</h3></Col>
                    </Row>

                </Container>

                <Row className="text-center"> <h3> Các bên tham chiến</h3></Row>

                <Row>
                    <Row className="nation">
                        <Col className="leader p-3 m-3 border border-dark" >
                            <Row><b>{detailNation.nation[0].name}</b></Row>
                            <Row className="text-start mt-3"><b>Lực Lượng</b> </Row>
                            <p>{detailNation.nation[0].force}</p>
                            <Row className="text-start mt-3"><b> Thương vong</b></Row>
                            <p>{detailNation.nation[0].lost}</p>
                        </Col>

                        <Col className="leader p-3 m-3 border border-dark">
                            <b> {detailNation.nation[1].name}</b><br></br>
                            <Row className="text-start mt-3"><b> Lực Lượng </b></Row>
                            <p>{detailNation.nation[1].force}</p>
                            <Row className="text-start mt-3"><b> Thương vong</b></Row>
                            <p>{detailNation.nation[1].lost}</p>
                            <ul>
                                {detailNation.nation[1].detail_about_name.map((item) => <li>{item}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col className="text-center m-4 "><h3>___________________________</h3></Col>
                </Row>

                <Row className="text-center" > <h3> Chỉ huy và Lãnh đạo</h3> </Row>

                <Row>
                    <Row className="nation-leader">
                        <Col className="leader p-3 m-3 border border-dark">
                            <Row><b>{detailNation.nation[0].name}</b></Row>
                            <Row className="lead mt-3">
                                {detailNation.nation[0].leader.map((item) => {
                                    return (
                                        <p> {item}</p>
                                    )
                                })}
                            </Row>
                        </Col>

                        <Col className="leader m-3 p-3 border border-dark">
                            <Row><b> {detailNation.nation[1].name}</b></Row>
                            <Row className="lead mt-3">
                                {detailNation.nation[1].leader.map((item) => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col className="text-center m-4 "><h3>___________________________</h3></Col>
                </Row>

                <Row className="text-center "> <h3> Diễn biến </h3> </Row>

                <Row className="history-dev" >
                    <Carousel>
                        {detailDevelopment.development.map(i => {
                            return (
                                <Carousel.Item key={i.id}>
                                    <img
                                        className="d-block w-100"
                                        src="https://scr.vn/wp-content/uploads/2020/07/Minimalist-PP-Background.jpg"
                                        alt="ảnh gì đấy"
                                    />
                                    <Carousel.Caption className="text-dark">
                                        <h3>  {i.name} ( { i.start && <p>{i.start}</p>} { i.end && <p>- {i.end}</p>}) </h3>
                                        <p> {i.content} </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Row>

                <Row>
                    <Col className="text-center m-4 "><h3>___________________________</h3></Col>
                </Row>

                <Row className="text-center"><h3>Kết quả </h3> </Row>
                <Row className="text-center"> <p> {battle.result}</p></Row>

                <Row>
                    <Col className="text-center m-4 "><h3>___________________________</h3></Col>
                </Row>

                <Row className="text-center"><h3>Ý Nghĩa</h3> </Row>
                <Row className="text-center"> <p>{battle.meaning}</p></Row>

                <Row>
                    <Col className="text-center m-4 "><h3>___________________________</h3></Col>
                </Row>
                <Row className="text-center"><h2> Cảm nhận của bạn</h2> </Row>

                <Form className="replt m-3">
                    <Row>
                        <Col sm={3} md={3}></Col>
                        <Col sm={5} md={5}>
                            <Form.Control as="textarea" placeholder="Góp ý ở đây nè" style={{ height: '170px', width: '500px' }} />
                        </Col>
                        <Col sm={4} md={4}></Col>
                    </Row>
                    <Row>
                        <Col sm={3} md={3}></Col>
                        <Col sm={5} md={5}></Col>
                        <Col sm={4} md={4}>
                            <Button variant="primary"> Send</Button>
                        </Col>
                    </Row>
                </Form>

            </Container>
        </Container>
    )
}