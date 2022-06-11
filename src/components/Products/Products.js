import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import Case from '../Case/Case';
import Lists from "../Lists/Lists";
import JSQues from "../JSQues/JSQues";
import './Products.css';
import '../Case/Case.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('cases.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const [list, setList] = useState([]);
    const addToList = (item) => {
        console.log(list);
        document.getElementById('selected-list-details').display = 'block';
        const duplicate = list.find(l => l.id === item.id);
        let newList = [];
        if (!duplicate) {
            newList = [...list, item];
        }
        else {
            newList = [...list];
        }
        if (newList.length <= 4) {
            setList(newList);
        }
        // return <div id="selected-list-details" style={{ display: 'block' }}></div>
    }
    return (
 <div>
            <div className='main'>
            <div className='products'>
                {
                    products.map(product => <Case key={product.id} product={product} addToList={addToList}></Case>)
                }
            </div>
            <div>
            <div className="selected-list">
                <p>Confused about which case to
                    <span className='color'> Buy?</span> <br></br>
                    Choose any <span className='color'> Four</span> cases that you love and We will help you to select one! </p>
                <h3 className="text-center">Selected List</h3>
                <Lists list={list}></Lists>
            </div>
            </div>
        </div>
        <JSQues></JSQues>
 </div>
    );
};

export default Products;