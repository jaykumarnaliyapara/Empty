import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  
  const navigate=useNavigate();
  let data = useCart();
  let dispatch = useDispatchCart()
  if (data.length === 0) {
    return (localStorage.getItem("authT"))
    ?(<div><Navbar />
    <div className='check'>THIS CART IS EMPTY.</div></div>
  ):<div><Navbar/><div className='check'>do login first</div></div>}
  const handleCheckOut=async()=>{
    let userEmail=localStorage.getItem("E-mail");
    let response=await fetch("http://localhost:5000/odata",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        order_data:data,
        email:userEmail,
        order_date:new Date().toDateString()
      })
    });
    console.log(response.status)
    if(response.status===200){
    
      dispatch({type:"DROP"})
      navigate("/home.js")
      alert("Order Has Been Placed!!")
    }
  }
  return ((localStorage.getItem("authT"))
    ? (<div><Navbar />
    
      <div className='m-5'><h1>YOUR CART!!</h1>
        <div className='container m-auto mt-5 table responsive table-responsive-sm table-responsive-md'>
          <table className='table table-hover'>
            <thead className="text-success fs-3">
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Category</th>
                
                <th scope='col'>RemoveItem</th>
              </tr>
                  {data.map((item, index) => (
                <tr scope='row'>{index + 1}
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.cat}</td>
                  
                  <td><button type="button" className='btn p-0'><h3  onClick={()=>dispatch({type:"REMOVE",index:index})}>Remove</h3></button></td>
                </tr>
              ))}     </thead>
          </table>
          <tbody>

          </tbody>
          <button type="submit" onClick={handleCheckOut} className="btn btn-primary btn align-right">CheckOut</button>
        </div>


      </div>


    </div>)
    : (<div className='d-flex'><Link className='m-2' style={{ "color": "red" }} to='/login.js'>Login</Link>
      <Navbar /><div className="check">DO LOGIN FIRST!!</div></div>)


  )
}
