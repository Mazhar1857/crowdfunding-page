import React from 'react';
import './productItem.css';

function ProductItem({ productName, totalPledge, productDescription, totalLeft, handleRewardBtn, index }) {
    return (
        <div className={`product-item ${totalLeft === 0 ? 'out-of-stock' : ''}`} key={productName}>
            <div className='product'>
                <div>{productName}</div>
                <div>Pledge ${totalPledge} or more</div>
            </div>
            <div className='product-description'>{productDescription}</div>
            <div className='reward'>
                <div className='left'>
                    <span>{totalLeft}</span>
                    <span>left</span>
                </div>
                <button className={`reward-button ${totalLeft === 0 ? 'out-of-stock' : ''}`} onClick={() => { handleRewardBtn(index) }}>{totalLeft === 0 ? 'Out Of Stock' : 'Select Reward'}</button>
            </div>
        </div>
    )
}

export default ProductItem
