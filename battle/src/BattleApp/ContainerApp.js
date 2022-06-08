import React, { useEffect, useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../css/slide.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Content from "./Content";
import ContentSidebar from "./ContentSidebar";
import ContentItem from "./ContentItem";
import Slider from "./Slider";
import DetailHistory from "./DetailHistory";
import HomePage from "./HomePage";
import Register from "./register";
import Login from "./login";
import Header from "./Header";
import Footer from "./Footer";
import { AuthContext, autoLogin, generateInitUser, getUsers } from "./user";
import { generateCommentUser,getComment } from "./comment";
import DetailBattle from "./DetailBattle"
import { getAllDataHistory } from "../data/dataDetail";

generateInitUser()
generateCommentUser()
export default function ContainerApp() {

    const [currentUser,setCurrentUser]  = useState(null)
    const [users, setUsers] = useState(getUsers())
    const [comments,setComments] = useState(getComment())

    useEffect(()=>{
        const theUser = autoLogin()
        setCurrentUser(theUser)
        window.scrollTo(0, 0);
    },[])
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
 
    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser,users,setUsers}}>
        <BrowserRouter>
            <Header placeholder='Enter battle name...' data={dataBattles}/>
            <Container fluid>
                <HomePage />
                <Routes>
                    <Route path="/ages/:ageId/battles/:battleId" element={<DetailHistory/>}></Route>
                    <Route path="/battles/:battleId" element={<DetailBattle/>}></Route>
                    <Route path="/" element = { <HomePage/>}></Route>
                    <Route path="/register" element = {<Register/>}></Route>
                    <Route path="/login" element = {<Login />}></Route>
                    <Route path="*" element={<h2 className="text-danger">không tìm thấy kết quả</h2>}></Route>
                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}