import React, { useEffect, useState } from "react";
import { Container, Row, Col, NavItem, ListGroup, ListGroupItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "../css/content.css"
import { filterBattleByName, getAllDataHistory, getDataAge } from "../data/dataDetail";
import ContentItem from "./ContentItem";
import ContentSidebar from "./ContentSidebar";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import dataHistory from "../data/dataDetail";
import ContentBattle from "./ContentBattle";
import {slice, concat, } from 'lodash';

export default function Content() {
    const [agesList, setAgesList] = useState([])
    const [currentAge, setCurrentAge] = useState(null)
    const [allBattle, setAllBatte] = useState([])
    const [activeAll, setActiveAll] = useState(false)
    const [resultFilter, setResultFilter] = useState('')
 

    useEffect(() => {
        let data = getAllDataHistory()
        setAgesList(data)
    }, [])


    const dataBattles = []
    const battles = getAllDataHistory()
    const battle = battles.map((item) => {
        return item.battles
    })
    const battleItem = battle.map((item) => {
        return item.map((itembattle) => {
            dataBattles.push(itembattle)
        })
    })
    console.log(dataBattles)
    const setItem = (item) => {
        setCurrentAge(item)
        setActiveAll(false)
    }
    const setNothing = () => {
        setCurrentAge(null)
    }
    const setAllItem = () => {
        setAllBatte(dataBattles)
        setCurrentAge(1)
        setActiveAll(true)
    }

   const [noOfelement,setnoOfElement] = useState(4)
   
    const loadmore = () => {
        setnoOfElement(noOfelement + noOfelement)
    }
    const slice = dataBattles.slice(0,noOfelement)
    console.log(slice)
    const filteredData = slice.filter((el) => {
        if (resultFilter === '') {
            return el;
        }
        if (el.name.toLowerCase().includes(resultFilter)) {
            return el
        }
        else {
            for (let item of el.name) {
                if (item.toLowerCase().includes(resultFilter)) {
                    return el
                }
            }
        }
    })
    return (
        <Container fluid className="container-content">
            <Row className="content-item">
                <Slider />
                <Row className="battle-content">
                    <Col className="col-sidebar" md={3}>
                        <ListGroup variant="flush" className="d-sm-none list-sidebar d-md-block">
                            <h1 className="sidebar-header">Timeline</h1>
                            <ListGroup.Item action className="item-sidebar" onClick={setNothing}>Khái Quát</ListGroup.Item>
                            <ListGroup.Item action className="item-sidebar" onClick={setAllItem}>Tất cả</ListGroup.Item>
                            {agesList.map((item) => {
                                return (
                                    <ListGroup.Item key={item.id} onClick={() => setItem(item)} action className='item-sidebar' >{item.age}</ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                        <NavDropdown action title="Timeline" className="-none d-sm-block d-md-none">
                            <NavDropdown.Item className="item-sidebar" onClick={setNothing}>Tất cả thời kì</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {agesList.map((item) => {
                                return (
                                    <NavDropdown.Item key={item.id} action onClick={() => setItem(item)} >{item.age}</NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Col>
                    <Col className="col-content" md={9}>
                        <Container className="container-content">
                            {currentAge &&
                                <div>{activeAll && (
                                    <Row className="shadow-sm search-battle">
                                        <Col md={6} ms={12} className="ms-auto mr-3">
                                            <Form className="d-flex" onChange={(event) => setResultFilter(event.target.value.toLowerCase())}>
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button variant="outline-success">Search</Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                )}
                                    <Row className="content">
                                        <Row>
                                            <Col md={12} className="img-banner">
                                                <img src={currentAge.img}></img>
                                            </Col>
                                            {/* <Col>
                                                nội dung banner từng cái
                                            </Col> */}
                                        </Row>
                                        <Row className="container-item">
                                            {activeAll ? (
                                                <>
                                                    {filteredData.map((item) => {
                                                        return (
                                                            <ContentBattle key={item.id} img={item.img_age} name={item.name} age={currentAge} id={item.idBattles} idAge={currentAge.id} />
                                                        )
                                                    })}
                                                    <div className="btn-content">
                                                     <Button onClick={loadmore} variant="dark" className="btn-loadmore"> Load More </Button>
                                                    </div>
                                                </>
                                            ) : (<>
                                                {currentAge.battles.map((item) => {
                                                    return (
                                                        <ContentItem key={item.id} img={item.img_age} name={item.name} age={currentAge} id={item.idBattles} idAge={currentAge.id} />
                                                    )
                                                })}
                                            </>)}
                                        </Row>
                                    </Row>
                                </div>}
                            {!currentAge &&
                                <div>
                                    <Row>
                                    </Row>
                                    <Row className="content">
                                        <Row >
                                            <Col md={12} className='img-banner'>
                                                <img src="https://khoahocphattrien.vn/Images/Uploaded/Share/2017/05/09/10-chien-dich-hiem-co-kho-tin-trong-lich-su-Viet-Nam_7.jpg"></img>
                                            </Col>
                                        </Row>
                                        <Row className="container-history">
                                            <h1>Biên niên sử Việt Nam</h1>
                                            <div className="history-content">
                                                <p>Lịch sử Việt Nam nếu tính từ lúc có mặt con người sinh sống thì đã có hàng vạn năm trước Công nguyên, còn tính từ khi cơ cấu nhà nước được hình thành thì mới khoảng từ năm 700 năm trước công nguyên.

                                                    Các nhà khảo cổ đã tìm thấy các di tích chứng minh loài người đã từng sống tại Việt Nam từ thời đại đồ đá cũ thuộc nền văn hóa Tràng An, Ngườm, Sơn Vi và Soi Nhụ. Vào thời kỳ đồ đá mới, nền văn hóa Hòa Bình – Bắc Sơn tại vùng này đã phát triển về chăn nuôi và nông nghiệp,
                                                    đặc biệt là kỹ thuật trồng lúa nước. Những người Việt tiền sử trên vùng châu thổ sông Hồng – Văn minh sông Hồng và sông Mã này đã khai hóa đất để trồng trọt, tạo ra một hệ thống đê điều để chế ngự nước lụt của các sông, đào kênh để phục vụ cho việc trồng lúa và đã tạo nên nền văn minh lúa nước và văn hóa làng xã

                                                    Truyền thuyết kể rằng từ năm 2879 TCN, nhà nước Xích Quỷ của người Việt đã hình thành, cùng thời với truyền thuyết về Tam Hoàng Ngũ Đế tại Trung Quốc. Tuy nhiên, đây chỉ là truyền thuyết dân gian, các nghiên cứu khảo cổ hiện chưa tìm được bằng chứng nào cho thấy nhà nước này từng tồn tại.

                                                    Đến thời kỳ đồ sắt, vào khoảng thế kỷ 8 TCN đã xuất hiện nhà nước đầu tiên của người Việt trên miền Bắc Việt Nam ngày nay. Theo sử sách, đó là Nhà nước Văn Lang của các vua Hùng. Thời kỳ Vua Hùng được nhiều người ghi nhận là quốc gia có tổ chức đầu tiên của người Việt Nam, bắt đầu với truyền thuyết Con Rồng cháu Tiên mà người Việt Nam tự hào truyền miệng từ đời này qua đời khác.[1]</p>
                                            </div>

                                        </Row>
                                    </Row>
                                </div>}
                        </Container>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}