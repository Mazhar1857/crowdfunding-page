import React, { useState } from 'react'
import './progressBar.css'
function ProgressBar() {
    const [value, setValue] = useState(89914);
    const progress = ((value / 100000) * 100);

    return (
        <div className='progress'>
            <div className='total-backed'>
                <div>$89,914</div>
                <div>of $100,000 backed</div>
            </div>
            <div className='total-backer-container'>
                <div className='line'></div>
                <div className='total-backer'>
                    <div>5,007</div>
                    <div>total backers</div>
                </div>
            </div>
            <div className='days-left-container'>
                <div className='line'></div>
                <div className='days-left'>
                    <div >56</div>
                    <div>days left</div>
                </div>
            </div>
            <div className='progress-bar' style={{ '--Progress': `${progress}%` }}></div>
        </div >
    )
}

export default ProgressBar
