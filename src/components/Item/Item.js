import React from 'react';
// import { Button } from 'react-bootstrap/';
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid';

const Item = ({ item }) => {
    const {name,image} = item;
    // console.log(item);
    return (
        <div>
        <div className='item'>
        <img className='item-image' src={image} alt=""/>
        <h5>{name}</h5>
        <p className='delete-btn'><FontAwesomeIcon icon ={faTrash}></FontAwesomeIcon></p>
        </div>
            
        </div>
    );
};

export default Item;
