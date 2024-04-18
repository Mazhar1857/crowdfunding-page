import React, { useEffect, useState } from 'react';
import './backThisPorjectItem.css';

function BackThisProjectItem({ productName, totalPledge, productDescription, totalLeft, index, handleCheckedProduct, isActive, handleContinueBtn, }) {

    return (
        <>
            <div className={`project-product ${index === isActive ? 'checked-radio-btn' : ''} ${totalLeft === 0 ? 'out-of-stock' : ''}`} >
                <input type="radio" name='product' checked={index === isActive} id={productName} value={totalPledge} onClick={() => { handleCheckedProduct(index) }} />
                <label className='radio-btn' htmlFor={productName} onClick={() => { handleCheckedProduct(index) }}></label>
                <div className='project-product-name'>
                    <label htmlFor={productName} onClick={() => { handleCheckedProduct(index) }}>{productName}</label><span>Pledge ${totalPledge} or more</span>
                </div>
                <div className='project-product-left'>
                    <span>{totalLeft}</span><span>left</span>
                </div>
                <div className='project-product-description'>{productDescription}</div>
                <div className={`back-project-product ${index === isActive ? 'checked-radio-btn' : ''}`}>
                    <div>Enter your pledge</div>
                    <div className='project-pledge-btn' >
                        <div className='project-input-btn'>
                            <input type='text' onChange={onchange} defaultValue={totalPledge} />
                        </div>
                        <button onClick={handleContinueBtn}>continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackThisProjectItem;
