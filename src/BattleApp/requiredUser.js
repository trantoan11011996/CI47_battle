import React from "react";
import "../css/required.css"
export default function RequiredUser({capsLetterFlag,numberFlag,pwdLengthFlag}){
    return (
        <div className="requried-field">
        <p className={capsLetterFlag}>Must contain one Capital letter</p>
        <p className={numberFlag}>Must contain number</p>
        <p className={pwdLengthFlag}>Must be 6 chars long</p>
        </div>
    )
}