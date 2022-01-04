import React from 'react'
const WorkCard = ({work_card_image,work_title,tech,LinkTo}) => {
    return (
        <div className="work-card">
            <div className="work-card-image">
                <img src={work_card_image}  alt="Work_image"/>
            </div>
            <a href={LinkTo} className='work-card-detail' target="_blank" rel='noreferrer'>
            <div className='work-card-detail-inner'>
                <div className="details">
                <h5>{work_title}</h5>
                <p>{tech}</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default WorkCard
