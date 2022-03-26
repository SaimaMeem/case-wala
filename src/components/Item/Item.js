import React from 'react';

const Item = ({ item }) => {
    
    // console.log(item);
    return (
        <div>
            <h5>{item.name}</h5>
        </div>
    );
};

export default Item;
