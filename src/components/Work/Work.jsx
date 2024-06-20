import React from "react";
import "./work.css";
import OrgonTalk from "../../images/orgon-talk.png";
import InOncology from "../../images/InOncology.png";
import Jardiance from "../../images/Jardiance.png";
import Respimate from "../../images/Respimat.png";
import squre from "../../images/square2_logo.svg";
import GEL from "../../images/Gel.png";
import Lectrona from "../../images/Lectrona.png"
import WorkCard from "../work_card/WorkCard";
import Digital from "../../images/Digital_maxin.svg"


const Work = () => {
  return (
    <div className="work-container-parent">
      <div className="one__col">
        <h3 className="sub-title">Projects</h3>
        <h3 className="title">Work</h3>
        <p className="desc">List of projects</p>
      </div>
      <div className="work-container">
        <WorkCard
          work_card_image={OrgonTalk}
          work_title="Orgon Talk HF"
          LinkTo="https://www.organs-talk.com/"
        />
        <WorkCard
          work_card_image={InOncology}
          work_title="InOncology"
          LinkTo="https://www.inoncology.com/"
        />
        <WorkCard
          work_card_image={Jardiance}
          work_title="Jardiance T2D"
          LinkTo="https://pro.boehringer-ingelheim.com/products/jardiance/heart-failure/"
        />
        <WorkCard
          work_card_image={Respimate}
          work_title="Respimate CZ"
          LinkTo="https://www.respimat.com/"
        />
        <WorkCard
          work_card_image={squre}
          work_title="Square 2 marketing"
          LinkTo="https://www.square2marketing.com/"
        />
        <WorkCard
          work_card_image={GEL}
          work_title="Group Experimental learning"
          LinkTo="https://www.gelcorp.com/"
        />
         <WorkCard
          work_card_image={Lectrona}
          work_title="Lectrona"
          LinkTo="https://pro.boehringer-ingelheim.com/funding/"
        />
         <WorkCard
          work_card_image={Digital}
          work_title="Digital Magazine"
          LinkTo="https://boehringer-ingelheim.se/prio/"
        />
      </div>
      <div className="work-container" style={{display:'none'}}>
        <WorkCard
          work_card_image={OrgonTalk}
          work_title="Orgon Talk HF"
          LinkTo="https://www.organs-talk.com/"
        />
     
        <WorkCard
          work_card_image={InOncology}
          work_title="InOncology"
          LinkTo="https://www.inoncology.com/"
        />
        <WorkCard
          work_card_image={Jardiance}
          work_title="Jardiance T2D"
          LinkTo="https://pro.boehringer-ingelheim.com/products/jardiance/heart-failure/"
        />
      
        <WorkCard
          work_card_image={Respimate}
          work_title="Respimate CZ"
          LinkTo="https://www.respimat.com/"
        />
        <WorkCard
          work_card_image={squre}
          work_title="Square 2 marketing"
          LinkTo="https://www.square2marketing.com/"
        />
        <WorkCard
          work_card_image={GEL}
          work_title="Group Experimental learning"
          LinkTo="https://www.gelcorp.com/"
        />
      </div>
    </div>
  );
};

export default Work;
