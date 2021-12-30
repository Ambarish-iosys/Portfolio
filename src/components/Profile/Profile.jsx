import React, { useState } from "react";
import {FaFacebookF,FaTwitter} from "react-icons/fa";
import {GrInstagram,GrPinterest} from 'react-icons/gr';
import {FaLinkedinIn} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import "./profile.css";
import './typeWriter'
import profile from "../../images/profile.png";
const Profile = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [closeNav, setCloseNav] = useState(false);
 
  function NavOpen(e){
      e.preventDefault();
      setNavToggle(true);
      setCloseNav(false);
  }
  function CloseNav(e){
      e.preventDefault();
      setCloseNav(true);
      setNavToggle(false);
      
  }


  return (
    <div>
      <a href="#" className="menu_trigger" onClick={(e)=>NavOpen(e)}>
        <span className="text">Menu</span>
        <span className="hamb">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
       <div className={`NavOverlay ${navToggle ? 'ActiveNavOverlay':''}`}>
       </div>
       <div className={`side-navbar ${navToggle ? "active openNav" : ""}`}>
      <a href="#" className="closer" onClick={(e)=>CloseNav(e)}></a>
      <div className="nav_in">
        <nav id="nav">
          <h3 className="label">Menu</h3>
          <ul>
            <li>
              <a href="#home" >Home</a>
            </li>
            <li >
            <a href="#about">About</a>
            </li>
            <li >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
       <div className="nav_footer ready">
          <div className="social">
              <ul>
                <li><Link to="#"><FaFacebookF size={20} /></Link></li> 
                <li><Link to="#"><FaTwitter size={20}  /></Link></li> 
                <li><Link to="#"><GrInstagram size={20} /></Link></li> 
                <li><Link to="#"><GrPinterest size={20}  /></Link></li> 
                <li><Link to="#"><FaLinkedinIn size={20} /></Link></li> 
              </ul>
          </div>
          <div className="copyright">
              Developed by Ambarish
          </div>
       </div>
      </div>
     </div>
      <div className="profile-section">
        <div className="right-top">
          <div className="border-1"></div>
          <div className="border-2"></div>
          <div className="img_holder">
            <img src={profile} alt="image" />
          </div>
          <div className="title_holder">
            <h5>Hi There! I am</h5>
            <p className="h3">
              <span className="animated_title" id="animated_title"></span>
            </p>
          </div>
        </div>
        <div className="right-bottom">
          <div className="right_bottom">
            <a href="#contact">
              <span className="circle"></span>
              <span className="text">
                I’m available for a freelance job. Hire me
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
