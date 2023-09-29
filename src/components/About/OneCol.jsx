import React from "react";
import { Link } from "react-router-dom";
import download from "../../images/download.svg";
import CV from "../../CV/Ambarish_Patil.pdf";
import downArrow from "../../images/down_arrow.svg";
import Tabs from "../TabPannel/Tabs";
import "./one_col.css";
const OneCol = ({
  title,
  subtitle,
  desc,
  name,
  age,
  address,
  phone,
  email,
}) => {
  return (
    <div className="one__col">
      <h3 className="sub-title">{subtitle}</h3>
      <h2 className="title">{title}</h2>
      <p className="desc">{desc}</p>
      <div className="about-info">
        <div className="about-info-left">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>{name}</th>
              </tr>
              <tr>
                <th>Age</th>
                <th>{age}</th>
              </tr>
              <tr>
                <th>Address</th>
                <th>{address}</th>
              </tr>
              <tr>
                <th>Phone</th>
                <th>{phone}</th>
              </tr>
              <tr>
                <th>Eamil</th>
                <th>{email}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="about-info-right">
          <div className="download_cv">
            <Link
              to={CV}
              download="Ambarish_Patil__CV.pdf"
              target="_blank"
              title="Download CV"
            >
              <span className="icon">
                <img
                  src={downArrow}
                  className="arrow"
                  width={60}
                  height={60}
                  alt="arrow"
                  title="Download CV"
                />
                <img
                  src={download}
                  width={60}
                  height={60}
                  alt="download"
                  title="Download CV"
                />
              </span>
              <span>Download CV</span>
            </Link>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default OneCol;
