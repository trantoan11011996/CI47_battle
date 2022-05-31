import React from "react";
// import { FaArrowLeft} from 'react-icons/fa'

export default function BtnSlider({direction,moveSlide}){
    return(
        <button 
        onClick= {moveSlide}
        className = {direction==='next' ? 'btn-slide next' : 'btn-slide prev'}>
                {direction === 'next' ? <p>Next</p> : <p>Prev</p>}
        </button>
    )
}