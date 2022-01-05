import React from 'react'
import {HiLink} from 'react-icons/hi';
const WorkCard = ({work_card_image,work_title,tech,LinkTo}) => {
    return (
        <div className="work-card">
            <div className="work-card-image">
                <img src={work_card_image}  alt="Work_image"/>
            </div>
            <a href={LinkTo} className='work-card-detail' title={LinkTo} target="_blank" rel='noreferrer' aria-label={work_title}>
            <div className='work-card-detail-inner'>
                <div className="details">
                <h5>Visit <HiLink size={22} /></h5>
                <p>{tech}</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default WorkCard
