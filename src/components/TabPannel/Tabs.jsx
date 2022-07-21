import React from "react";
import Cards from "../cards/Cards";
import "./Tabs.css";

import ProgessBar from "../ProgessBar/ProgessBar";

const Tabs = () => {
  return (
    <div className="tabs-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="tab-header">
        <ul>
          <li>
            <span data-tab-id="1" className="active">
              Experience
            </span>
          </li>
          <li>
            <span data-tab-id="2">Education</span>
          </li>
          <li>
            <span data-tab-id="3">Skills</span>
          </li>
        </ul>
      </div>
      <div className="tab-desc" id="1">
        <div className="tab-item">
          <Cards
            card_title="Web Developer"
            card_subtitle="Indegene Pvt ltd, Banglore"
            card_year="2021 Feb - Present"
            card_body="Building and maintaining interactive websites with responsive, Working with technical aspects as well as team management along with managing team work. Worked on Drupal CMS application."
          />
        </div>
        <div className="tab-item">
          <Cards
            card_title="Software Engineer"
            card_subtitle="Iosys Software india pvt ltd, Banglore"
            card_year="2019 Sept - 2020 Mar"
            card_body="
            Deliver an engaging user experience through the optimization of images, code and browser compatibility.
            Develop functionality, code refinement and process improvement, generating more seamless operations and improvement commitments.
            "
          />
        </div>
        <div className="tab-item">
          <Cards
            card_title="Intern"
            card_subtitle="Neo Rays Software solution, Banglore"
            card_year=""
            card_body="
            Building a web application using Java technology such as JSP and JDBC with MySQL server. My role is maintaining databases on the server side and implementing modules.
            "
          />
        </div>
      </div>
      <div className="tab-desc" id="2">
        <div className="tab-item">
          <Cards
            card_title="BE(CSE)"
            card_subtitle="Kalaburagi, Karnataka"
            card_year="2016 - 2019"
            card_body="Appa institute of engineering and technology"
          />
        </div>
        <div className="tab-item">
          <Cards
            card_title="Diploma(CS)"
            card_subtitle="Kalaburagi, Karnataka"
            card_year="2013 - 2016"
            card_body="Govt Polytechnic kalaburagi"
          />
        </div>
        <div className="tab-item">
          <Cards
            card_title="SSLC"
            card_subtitle="Kalaburagi, Karnataka"
            card_year="2013 - completed"
            card_body="Mahatma Basaveshwar High School"
          />
        </div>
      </div>
      <div className="tab-desc" id="3">
        <div className="skill-container">
          <div className="skill-left">
            <ProgessBar title="HTML5" value="95%" />
            <ProgessBar title="CSS3" value="90%" />
            <ProgessBar title="JavaScript" value="80%" />
            <ProgessBar title="React.js" value="60%" />
            <ProgessBar title="Drupal 8" value="60%" />
          </div>
          <div className="skill-right">
            <ProgessBar title="Bootstrap 3" value="80%" />
            <ProgessBar title="Sass" value="75%" />
            <ProgessBar title="jQuery" value="90%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
