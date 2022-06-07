import React, {useState} from "react";
import { Card, Col, Row,Form,Button, Container } from "react-bootstrap";
import footer from "../css/footer.css";
import instagramlogo from "../img/icon/instagram.png"
import facebooklogo from "../img/icon/facebook.png"
import githublogo from "../img/icon/github.png"

export default function Footer() {

    const [email, setEmail] = useState('');
    const [feedback, setFeedBack] = useState('');

    const feedbackData= [
        {email: email, feedback: feedback},
    ]

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(email);
        if(!localStorage.getItem('feedback')){
            localStorage.setItem('feedback', JSON.stringify(feedbackData));
        }

    }
    return (
        <Card fluid className="footer_container" onSubmit={handleSubmitForm}>
            <Row>
            <Col md={6}>
            </Col>
            <Col md ={4}>
            <Form className="form-footer">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Feedback For Us</Form.Label>
                    <Form.Control type="text" placeholder="Let me know what you think A'bout Us" onChange={(event) => setFeedBack(event.target.value)}  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
            </Row>
            <Row>
                <Col sm={12} md={2}>
                    <div className="description footer_item">
                        <h4>Suviet</h4>
                        <hr />
                        <p>SuViet là một trang ghi chú tổng hợp về các trận đánh nổi tiếng và quan trọng trong lịch sử Việt Nam</p>
                    </div>
                </Col>

                <Col sm={12} md={3}></Col>

                <Col sm={12} md={2}>
                    <div className="info footer_item">
                        <div>
                            <h4>Info nhóm</h4>
                            <hr />
                            <p>Dự án của tập thể nhóm 1 <br />TOÀN-THUẬN-HIỆP-AN </p>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={2}>
                   <div className="footer_item">
                        <h4>Liên hệ</h4>
                        <hr />
                        <div className="contact">
                            <div> <img className="icon" src={instagramlogo} alt={"instagram logo"} />  </div>
                            <div> <img className="icon" src={facebooklogo} alt={"facebook logo"} />  </div>
                            <div> <img className="icon" src={githublogo} alt={"github logo"} />  </div>
                        </div>        
                    </div> 
                </Col>

                <Col sm={12} md={3}>
                    <div className="footer_item">
                        <h4>Nội dung và thông tin</h4>
                        <hr />
                        <div>
                            <p>Nội dung và thông tin các trang đánh được tham khảo và trích dẫn từ nhiều nguồn khác nhau</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Card>
    )
}