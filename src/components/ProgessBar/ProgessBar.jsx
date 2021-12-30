import React from 'react'
import './ProgessBar.css'

const ProgessBar = ({title,value}) => {
    return (
        <div className='progress-bar'>
            <div className="progress-bar-item">
                <h3 className='progress-title'>{title}</h3>
                <span className='progress-perc'>{value}</span>
                <div className='progress-bg'>
                    <div className='progress-up-bg' style={{width:`${value}`}}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgessBar
