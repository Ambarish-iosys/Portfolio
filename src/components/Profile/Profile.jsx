import React, { useState } from "react";
import {AiFillGithub,AiFillCodepenCircle,AiOutlineTwitter} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr';
import {FaLinkedinIn} from 'react-icons/fa';
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
      <button className="menu_trigger" onClick={(e)=>NavOpen(e)} aria-hidden={closeNav}>
        <span className="text">Menu</span>
        <span className="hamb">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
       <div className={`NavOverlay ${navToggle ? 'ActiveNavOverlay':''}`}>
       </div>
       <div className={`side-navbar ${navToggle ? "active openNav" : ""}`}>
      <button href="#" className="closer" onClick={(e)=>CloseNav(e)}></button>
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
                <li><a rel="noreferrer" href="https://twitter.com/AmbrishPatil13" target="_blank" title="https://twitter.com/AmbrishPatil13"><AiOutlineTwitter size={20} /></a></li> 
                <li><a rel="noreferrer" href="https://github.com/Web-developer-86" target="_blank" title="https://github.com/Web-developer-86"><AiFillGithub size={20}  /></a></li> 
                <li><a rel="noreferrer" target="_blank" title="https://www.instagram.com/__ambrish____patil/" href="https://www.instagram.com/__ambrish____patil/"><GrInstagram size={20} /></a></li> 
                <li><a rel="noreferrer" target="_blank" title="https://codepen.io/ambarish-iosys" href="https://codepen.io/ambarish-iosys"><AiFillCodepenCircle size={20}  /></a></li> 
                <li><a  rel="noreferrer" target="_blank" title="https://www.linkedin.com/in/ambarish-patil-2bb550154/" href="https://www.linkedin.com/in/ambarish-patil-2bb550154/"><FaLinkedinIn size={20} /></a></li> 
              </ul>
             
          </div>
          <div className="copyright">
              <p>Developed by Ambarish</p>
          </div>
       </div>
      </div>
     </div>
      <div className="profile-section">
        <div className="right-top">
          <div className="border-1"></div>
          <div className="border-2"></div>
          <div className="img_holder">
            <img src={profile} alt="Profile" width="419" height="auto"/>
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
                 Hire me
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
