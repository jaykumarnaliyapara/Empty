import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";


export default function Profile() {
 
  return (
    (localStorage.getItem("authT"))
      ? (
        <div><Navbar />
          <div className="check">
          {localStorage.getItem("[idata]") }</div>

        </div>)
      : (<div className='d-flex'>
        <Navbar /><div className="check">DO LOGIN FIRST!!</div></div>)

  );
}