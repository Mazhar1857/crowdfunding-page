import React, { useState } from 'react';
import './mastercraft.css';
import { LogoMastercraft } from '../Svg';
import { IconBookmark } from '../Svg';

function Mastercraft({ handleBackProjectBtn }) {
    const [bookmark, setBookmark] = useState(false);

    const handleBookMark = () => {
        setBookmark((preMark) => {
            return !preMark
        })
    }

    return (
        <div className='mastercraft'>
            <div className='mastercraft-logo'>
                <LogoMastercraft />
            </div>
            <div className='mastercraft-heading'>
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </div>
            <div className='project-bookmark'>
                <button className='mastercraft-project-button' onClick={handleBackProjectBtn}>Back this project</button>
                <button onClick={handleBookMark} className={`mastercraft-bookmarked-button ${bookmark ? `bookmarked` : `bookmark`}`}>
                    <IconBookmark /><span >
                        {bookmark ? 'Bookmarked' : 'Bookmark'}</span>
                </button>
            </div>
        </div >
    )
}

export default Mastercraft
