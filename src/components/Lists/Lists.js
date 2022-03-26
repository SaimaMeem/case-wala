import React, { useState } from 'react';
import Item from '../Item/Item';
import './Lists.css'
import { Button } from 'react-bootstrap';
const Lists = ({list}) => {
    const [cc, setCC] = useState('');
    const chooseOne = ()=>{
        // console.log(list);
        let names = [];
       list.map(l=> names.push(l.name));
       console.log(names);
       const  choosenOneId = Math.floor(Math.random() * 4);
       setCC(names[choosenOneId]);
    }
    const chooseAgain =() =>{
        setCC('');
        list = [];
        document.getElementById('list').innerHTML = '';
    }
    return (
       <div id='selected-list-details'>
            <div className='lists shadow' id='list'>
        {
            list.map(item=> <Item key={item.id} item={item}></Item>)
        }
        </div>
        <div className="button-group">
                <Button  className='add-btn btn-lg' onClick={()=>{chooseOne()}}> Choose One</Button>
                <Button  className='add-btn btn-lg' onClick={()=>{chooseAgain()}}> Choose Again</Button>
        </div>
        <div className="choosen-one">
               <h4 className=''>{cc}</h4>
        </div>


       </div>
       
    );
};

export default Lists;