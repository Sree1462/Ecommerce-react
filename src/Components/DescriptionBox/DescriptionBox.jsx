import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews (123)
            </div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                An E-commerce Website is an online platform that facilates for buying and selling of products or services over the internet serves as a virtual marketplace where business and individualy showcases their products, interact with customers, and conduct transactions withoput the need for a physical presence. E-commerse websites have gained immense popularity due to their convenience accessibility, and global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products or serves a detailed description, images, prices, and any available variations (e.g: sizes, colors). Each product usually has its own details with relavent information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox