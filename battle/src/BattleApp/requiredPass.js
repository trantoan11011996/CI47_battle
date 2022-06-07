import React from "react";
import "../css/required.css"
export default function RequiredPass({capsLetterFlag,numberFlag,pwdLengthFlag,specialCharFlag}){
    return (
        <div className="requried-field">
        <p className={capsLetterFlag}>Must contain one Capital letter</p>
        <p className={numberFlag}>Must contain number</p>
        <p className={pwdLengthFlag}>Must be 6 chars long</p>
        <p className={specialCharFlag}>Must contain one special character</p>
        </div>
    )
}