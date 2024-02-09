import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useCart } from './ContextReducer'
import { useDispatchCart } from './ContextReducer';
export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart()
    const navigate = useNavigate();
    let options = props.fItem.options[0];
    let price = Object.keys(options)
    let price2 = Object.values(options)
    const [qty, setQty] = useState(price[0])
    const [size, setSize] = useState(price2)
    const handleCart = async () => {
        await dispatch({ type: "ADD", id: props.fItem._id, name: props.fItem.Name, qty: qty, cat: props.fItem.Category })
        alert("Item Added:" +" "+ props.fItem.Name +" "+ qty)
        console.log(data)
        console.log(price2[0])
    }
    return (
        <div className='mb-2 border 3px'>
            <div className="m-3 " >
                <img src={props.fItem.img} className="card-img"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.fItem.Name}</h5>

                    <select className='m-2 h-100 bg-success rounded' onChange={((e) => setQty(e.target.value))}>
                        {price.map((pri) => {
                            return <option key={pri} value={pri} >{pri}</option>
                        }
                        )}
                        <label for="fname" onChange={((e) => setSize(e.target.value))}></label>
                    </select>

                    <div></div>
                    <button className={'btn btn-success justify-center ms-2'} onClick={localStorage.getItem("authT")
      ?() => handleCart():navigate("/login.js")}>Add to Cart</button><hr />
                </div>
            </div>
        </div>

    )
}