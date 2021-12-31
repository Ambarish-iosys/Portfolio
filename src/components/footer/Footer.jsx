import React from 'react'
import './footer.css'
let GetYear = ()=>{
    let date = new Date();
    return date.getFullYear();
}
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="top">
                <div className="to-top"><span></span></div>
            </div>
            <div className="bottom">
            <p>Copyright © <GetYear/> All rights reserved.<span>Developed by Ambarish Patil</span></p>
            </div>
        </div>
    )
}

export default Footer
