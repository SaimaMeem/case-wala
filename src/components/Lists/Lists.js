import React from 'react';
import Item from '../Item/Item';
import './Lists.css'
import { Button } from 'react-bootstrap';
const Lists = ({list}) => {
    // console.log(list);
    // const {id} = list;
    const selectOne = ()=>{
        // console.log(list);
        let names = [];
       list.map(l=> names.push(l.name));
       console.log(names);
       const  choosenOneId = Math.floor(Math.random() * 4);
       const choosenCase = names[choosenOneId];
    }
    return (
       <>
            <div className='lists shadow'>
        {
            list.map(item=> <Item key={item.id} item={item}></Item>)
        }
        </div>
        <div className="button-group">
                <Button  className='add-btn btn-lg' onClick={()=>{selectOne()}}> Choose One</Button>
                <Button  className='add-btn btn-lg'> Choose Again</Button>
        </div>
        <div className='choosen-One'>

        </div>
       </div>

    );
};

export default Lists;