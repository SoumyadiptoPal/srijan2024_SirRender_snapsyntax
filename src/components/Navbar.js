import React, { useState } from 'react'
import './Navbar.css'
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
    const [page,setPage]=useState("About")
  return (
    <div className='nav_cont'>
        <div className='nav_cont'>
        <div style={{fontWeight:"bolder", fontSize:25, marginRight:50}}>
            Janille Brown
        </div>
        <div className='nav_cont3' >
            <div style={{marginRight:20}} className={`${(page==="About")?"nav_border":""}`}>ABOUT</div>
            <div>WORK</div>
        </div>
        </div>
        <div className='nav_cont3'>
            <div>
                LET'S CONNECT 
            </div>
            <div style={{marginLeft:"20px"}}>
                soumyadiptopal@gmail.com <IoMdArrowDropdown/>
            </div>
        </div>
    </div>
  )
}

export default Navbar