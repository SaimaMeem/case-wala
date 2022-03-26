import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import Case from '../Case/Case';
import List from "../Lists/Lists";
import './Products.css';
import '../Case/Case.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [list, setList] = useState([]);
    const addToList = (item) => {
       const duplicate = list.find(l=> l.id === item.id);
    //    console.log(duplicate);
       let newList =[];
       if(!duplicate){
           newList = [...list, item];
       }
       else{
        newList = [...list];
       }
        if (newList.length <= 4) {
            setList(newList);
        }
    }
    useEffect(() => {
        fetch('cases.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='main'>
            <div className='products'>
                {
                    products.map(product => <Case key={product.id} product={product} addToList={addToList}></Case>)
                }
            </div>
            <div className="selected-list">
                <p>Confused about which case to
                    <span className='color'> Buy?</span> <br></br>
                    Choose any <span className='color'> Four</span> cases that you love and We will help you to select one! </p>
                <h3>Selected List</h3>
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Products;