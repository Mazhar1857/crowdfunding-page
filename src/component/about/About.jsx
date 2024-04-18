import React from 'react';
import './about.css';
import ProductItem from './ProductItem';
import { data } from '../data.jsx';

function About({ handleRewardBtn }) {
    return (
        <div id='about' className='about'>
            <h1>About this project</h1>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates our screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under te stand.</p>
            <div className='products'>
                {data.map((product, index) => {
                    return <ProductItem
                        key={index}
                        productName={product['product-name']}
                        totalPledge={product['total-pledge']}
                        productDescription={product['product-description']}
                        totalLeft={product['total-left']}
                        index={index}
                        handleRewardBtn={handleRewardBtn}
                    />
                })}
            </div>
        </div>
    )
}

export default About
