import React from 'react';
import './Topbar.scss'

const Topbar = ({menuOpen,setMenuOpen}) =>{

    const handleMenu =() =>{
       setMenuOpen(!menuOpen)
    }

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">

                    </div>
                </div>
        
                <div className="right">
                    <div className="hamburger" onClick={handleMenu} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar