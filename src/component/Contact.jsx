import React from 'react'
import phoneIcon from "./assets/phone-icon.png"
import mailIcon from "./assets/mail-icon.png"
function Contact(props) {
  return (
    <div className="contact-card">
    <img src={props.img} alt=""/>
    <h3>{props.name}</h3>
    <div className="info-group">
        <img src={phoneIcon} alt=""/>
        <p>{props.phone}</p>
    </div>
    <div className="info-group">
        <img src={mailIcon} alt=""/>
        <p>{props.email}</p>
    </div>
</div>
  )
}

export default Contact
