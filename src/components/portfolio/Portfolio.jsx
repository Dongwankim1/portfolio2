import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './Protfolio.scss'
export default function Portfolio() {
    const [selected,setSelected] = useState("1");

    const list =[
        {
            id:"1",
            title:"Featured"
        },
        {
            id:"2",
            title:"Featured"
        },
        {
            id:"3",
            title:"Featured"
        },
        {
            id:"4",
            title:"Featured"
        },
        {
            id:"5",
            title:"Featured"
        }
    ]
    useEffect(() => {
        switch (selected) {
            case "1":
                
                break;
        
            default:
                break;
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>subject</h1>
            <ul>
                {list.map((item)=>(<PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id} />))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/id.jpg" alt="" />
                    <h3>Brending</h3>
                </div>
                <div className="item">
                    <img src="assets/id.jpg" alt="" />
                    <h3>Brending</h3>
                </div>
                <div className="item">
                    <img src="assets/id.jpg" alt="" />
                    <h3>Brending</h3>
                </div>
                <div className="item">
                    <img src="assets/id.jpg" alt="" />
                    <h3>Brending</h3>
                </div>
            </div>
        </div>
    )
}
