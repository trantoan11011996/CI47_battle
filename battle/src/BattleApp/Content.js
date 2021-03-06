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
                            <ListGroup.Item action className="item-sidebar" onClick={setNothing}>Kh??i Qu??t</ListGroup.Item>
                            <ListGroup.Item action className="item-sidebar" onClick={setAllItem}>T???t c???</ListGroup.Item>
                            {agesList.map((item) => {
                                return (
                                    <ListGroup.Item key={item.id} onClick={() => setItem(item)} action className='item-sidebar' >{item.age}</ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                        <NavDropdown action title="Timeline" className="-none d-sm-block d-md-none">
                            <NavDropdown.Item className="item-sidebar" onClick={setAllItem}>T???t c???</NavDropdown.Item>
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
                                            <Form className="d-flex search-battle" onChange={(event) => setResultFilter(event.target.value.toLowerCase())}>
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
                                                n???i dung banner t???ng c??i
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
                                            <h1>Bi??n ni??n s??? Vi???t Nam</h1>
                                            <div className="history-content">
                                                <p>L???ch s??? Vi???t Nam n???u t??nh t??? l??c c?? m???t con ng?????i sinh s???ng th?? ???? c?? h??ng v???n n??m tr?????c C??ng nguy??n, c??n t??nh t??? khi c?? c???u nh?? n?????c ???????c h??nh th??nh th?? m???i kho???ng t??? n??m 700 n??m tr?????c c??ng nguy??n.

                                                    C??c nh?? kh???o c??? ???? t??m th???y c??c di t??ch ch???ng minh lo??i ng?????i ???? t???ng s???ng t???i Vi???t Nam t??? th???i ?????i ????? ???? c?? thu???c n???n v??n h??a Tr??ng An, Ng?????m, S??n Vi v?? Soi Nh???. V??o th???i k??? ????? ???? m???i, n???n v??n h??a H??a B??nh ??? B???c S??n t???i v??ng n??y ???? ph??t tri???n v??? ch??n nu??i v?? n??ng nghi???p,
                                                    ?????c bi???t l?? k??? thu???t tr???ng l??a n?????c. Nh???ng ng?????i Vi???t ti???n s??? tr??n v??ng ch??u th??? s??ng H???ng ??? V??n minh s??ng H???ng v?? s??ng M?? n??y ???? khai h??a ?????t ????? tr???ng tr???t, t???o ra m???t h??? th???ng ???? ??i???u ????? ch??? ng??? n?????c l???t c???a c??c s??ng, ????o k??nh ????? ph???c v??? cho vi???c tr???ng l??a v?? ???? t???o n??n n???n v??n minh l??a n?????c v?? v??n h??a l??ng x??

                                                    Truy???n thuy???t k??? r???ng t??? n??m 2879 TCN, nh?? n?????c X??ch Qu??? c???a ng?????i Vi???t ???? h??nh th??nh, c??ng th???i v???i truy???n thuy???t v??? Tam Ho??ng Ng?? ????? t???i Trung Qu???c. Tuy nhi??n, ????y ch??? l?? truy???n thuy???t d??n gian, c??c nghi??n c???u kh???o c??? hi???n ch??a t??m ???????c b???ng ch???ng n??o cho th???y nh?? n?????c n??y t???ng t???n t???i.

                                                    ?????n th???i k??? ????? s???t, v??o kho???ng th??? k??? 8 TCN ???? xu???t hi???n nh?? n?????c ?????u ti??n c???a ng?????i Vi???t tr??n mi???n B???c Vi???t Nam ng??y nay. Theo s??? s??ch, ???? l?? Nh?? n?????c V??n Lang c???a c??c vua H??ng. Th???i k??? Vua H??ng ???????c nhi???u ng?????i ghi nh???n l?? qu???c gia c?? t??? ch???c ?????u ti??n c???a ng?????i Vi???t Nam, b???t ?????u v???i truy???n thuy???t Con R???ng ch??u Ti??n m?? ng?????i Vi???t Nam t??? h??o truy???n mi???ng t??? ?????i n??y qua ?????i kh??c.[1]</p>
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