import React, { useEffect, useState } from 'react';
import './backThisProject.css';
import { IconcloseMenu } from '../Svg';
import BackThisProjectItem from './BackThisProjectItem';
import { data } from '../data'

function BackThisProject({ handleContinueBtn, handleCloseBtn, handleRewardBtn, reward }) {

    const [isActive, setIsActive] = useState('');
    useEffect(() => {
        setIsActive(reward);
    }, [reward])

    const handleCheckedProduct = (value) => {
        setIsActive(value);
    }

    return (
        <div className='back-this-project'>
            <div className='project-close' onClick={handleCloseBtn}><IconcloseMenu /></div>
            <h1>Back this project</h1>
            <div>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
            <div>
                {data.map((product, index) => {
                    return <BackThisProjectItem
                        key={'product_' + index}
                        productName={product['product-name']}
                        totalPledge={product['total-pledge']}
                        productDescription={product['product-description']}
                        totalLeft={product['total-left']}
                        index={index}
                        handleCheckedProduct={handleCheckedProduct}
                        isActive={isActive}
                        handleContinueBtn={handleContinueBtn}
                    />
                })}

            </div>

        </div >
    )
}

export default BackThisProject
