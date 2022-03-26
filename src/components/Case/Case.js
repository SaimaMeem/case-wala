import React from 'react';
import { Button } from 'react-bootstrap';
import './Case.css'

const Case = ({product}) => {
    const {image,name,price} = product;
    return (
        <div className='case shadow-lg'>
         <img src={image} alt="This is a case." />
            <h5 className='case-name'>{name}</h5>
            <h6 className='case-price'>
             <span className='case-text'> Price:</span> ${price}</h6>
            <Button className='add-btn btn-lg'>Add to List</Button>
        </div>
    );
};

export default Case;