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
        if(!localStorage.getItem('feedback')){
            localStorage.setItem('feedback', JSON.stringify(feedbackData));
        }

    }
    return (
        <Card fluid className="footer_container" onSubmit={handleSubmitForm}>
            <Row>
                <Col sm={12} md={3}>
                    <Row>
                        <Col md={12}>
                        </Col>
                        <Col md={12}>
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
                                    <Form.Control type="type" placeholder="Let me know what you think A'bout Us" onChange={(event) => setFeedBack(event.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={2}>
                    <div className="description footer_item">
                        <h4>S??? Vi???t</h4>
                        <hr />
                        <p>S??? Vi???t l?? m???t trang ghi ch?? t???ng h???p v??? c??c tr???n ????nh n???i ti???ng v?? quan tr???ng trong l???ch s??? Vi???t Nam</p>
                    </div>
                </Col>

                <Col sm={12} md={2}>
                    <div className="info footer_item">
                        <div>
                            <h4>Info nh??m</h4>
                            <hr />
                            <p>D??? ??n c???a t???p th??? nh??m 1 <br />TO??N-THU???N-HI???P-AN </p>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={2}>
                    <div className="footer_item">
                        <h4>Li??n h???</h4>
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
                        <h4>N???i dung v?? th??ng tin</h4>
                        <hr />
                        <div>
                            <p>N???i dung v?? th??ng tin c??c trang ????nh ???????c tham kh???o v?? tr??ch d???n t??? nhi???u ngu???n kh??c nhau</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Card>
    )
}

{/* <Row>
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
                        <p>SuViet l?? m???t trang ghi ch?? t???ng h???p v??? c??c tr???n ????nh n???i ti???ng v?? quan tr???ng trong l???ch s??? Vi???t Nam</p>
                    </div>
                </Col>

                <Col sm={12} md={3}></Col>

                <Col sm={12} md={2}>
                    <div className="info footer_item">
                        <div>
                            <h4>Info nh??m</h4>
                            <hr />
                            <p>D??? ??n c???a t???p th??? nh??m 1 <br />TO??N-THU???N-HI???P-AN </p>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={2}>
                   <div className="footer_item">
                        <h4>Li??n h???</h4>
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
                        <h4>N???i dung v?? th??ng tin</h4>
                        <hr />
                        <div>
                            <p>N???i dung v?? th??ng tin c??c trang ????nh ???????c tham kh???o v?? tr??ch d???n t??? nhi???u ngu???n kh??c nhau</p>
                        </div>
                    </div>
                </Col>

            </Row> */}