import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    //This allows to add style to the component, this way if the imageurl changes the component changes
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{backgroundImage:`url(${imageUrl}`}} ></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>                
            </div>
    </div>   
);

export default MenuItem;