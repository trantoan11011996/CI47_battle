import React,{useState} from "react";
import { Container,Row,Col } from "react-bootstrap";
import "../css/slide.css"
import BtnSlider from "./BtnSlider";
import { getAllDataHistory } from "../data/dataDetail";

export default function Slider(){

    const [slideIndex,setSlideIndex] = useState(1)
    const [data, setData] = useState(getAllDataHistory)
    const nextSlide = () =>{
            if(slideIndex !== data.length){
                setSlideIndex(slideIndex + 1)
            }
            else if (slideIndex === data.length){
                setSlideIndex(1)
            }
    }

    const prevSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === data.length){
            setSlideIndex()
        }
    }
    return(
        <Container fluid className="container-slider-home">
                {data.map((item,index)=>{
                    return(
                        <div key = {item.id} className={slideIndex === index + 1 ? "slide-img active-anim" : "slide-img"}>
                            <img className="img-item" src={item.img}></img>
                            <div className="slide-info">
                                <h1>{item.age}</h1>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
                 <BtnSlider  moveSlide = {nextSlide} direction = {'next'}/>
                <BtnSlider moveSlide = {prevSlide}  direction = {'prev'}/>
        </Container>
    )
}