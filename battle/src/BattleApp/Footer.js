import React from "react";
import { Card, Col, Row,Form,Button, Container } from "react-bootstrap";
import footer from "../css/footer.css";
import instagramlogo from "../img/icon/instagram.png"
import facebooklogo from "../img/icon/facebook.png"
import githublogo from "../img/icon/github.png"

export default function Footer() {
    return (
        <Card fluid className="footer_container">
            <Row>
            <Col md={4}>
            </Col>
            <Col md ={8}>
            <Form className="form-footer">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Feedback For Us</Form.Label>
                    <Form.Control type="password" placeholder="Let me know what you think A'bout Us" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
            </Row>
            <Row>
                <Col sm={12} md={2}>
                    <div className="description">
                        <h4>Suviet</h4>
                        <hr />
                        <p>SuViet là một trang ghi chú tổng hợp về các trận đánh nổi tiếng và quan trọng trong lịch sử Việt Nam</p>
                    </div>
                </Col>

                <Col sm={12} md={3}></Col>

                <Col sm={12} md={2}>
                    <div className="info">
                        <div>
                            <h4>Info nhóm</h4>
                            <hr />
                            <p>Dự án của tập thể nhóm 1 <br />TOÀN-THUẬN-HIỆP-AN </p>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={2}>
                    <h4>Liên hệ</h4>
                    <hr />
                    <div className="contact">
                        <div> <img className="icon" src={instagramlogo} alt={"instagram logo"} />  </div>
                        <div> <img className="icon" src={facebooklogo} alt={"facebook logo"} />  </div>
                        <div> <img className="icon" src={githublogo} alt={"github logo"} />  </div>
                    </div>
                </Col>

                <Col sm={12} md={3}>
                    <h4>Nội dung và thông tin</h4>
                    <hr />
                    <div>
                        <p>Nội dung và thông tin các trang đánh được tham khảo và trích dẫn từ nhiều nguồn khác nhau</p>
                    </div>
                </Col>

            </Row>
        </Card>
    )
}