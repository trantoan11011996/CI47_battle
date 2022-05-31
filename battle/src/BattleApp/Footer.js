import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import footer from "../css/footer.css";
import instagramlogo from "../img/icon/instagram.png"
import facebooklogo from "../img/icon/facebook.png"

export default function Footer() {
    return (
        <Card className="footer_container">

            <Row>
                <Col sm={12} md={2}>
                    <div className="description">
                        <h4>Suviet</h4>
                        <hr />
                        <p>SuViet là một trang ghi chú tổng hợp về các trận đánh nổi tiếng và quan trọng trong lịch sử Việt Nam</p>
                    </div>
                </Col>

                <Col md={3}></Col>

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
                        <div> <img className="icon" src={instagramlogo} alt={"instagram logo"} /> Instagram </div>
                        <div> <img className="icon" src={facebooklogo} alt={"facebook logo"} /> Facebook </div>
                    </div>
                </Col>
                
                <Col md={3}>
                    <h4>Nội dung và thông tin</h4>
                    <hr />
                    <div className="">
                        <p>Nội dung và thông tin các trang đánh được tham khảo và trích dẫn từ nhiều nguồn khác nhau</p>
                    </div>
                </Col>

            </Row>
        </Card>
    )
}