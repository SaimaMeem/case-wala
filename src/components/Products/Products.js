import React, { useEffect, useState } from 'react';
import Case from '../Case/Case';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    fetch('cases.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[]);
    return (
        <div className='products'>
            {
                products.map(product=> <Case product={product}></Case>)
            }
        </div>
    );
};

export default Products;