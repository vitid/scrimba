import React from "react"
import logo from '../../public/react-logo.png'

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-title">
                <img src={logo} width='40' height='40' />
                <h1>ReactFacts</h1> 
            </div>
           
          <h1 className="navbar-desc">React Course - Project 1</h1>
        </div>
    )
}