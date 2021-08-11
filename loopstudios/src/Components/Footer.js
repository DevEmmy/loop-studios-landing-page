import React from 'react'
import data from './data'

function Footer() {
    return (
        <div className='footer'>
            <div className="left_section">
                <h3> {data.title} </h3>
                <nav>
                    { data.nav.map((items)=>{
                        return(
                            <li> {items} </li>
                        )
                    })}
                </nav>
            </div>

            <div className="right_section">
                    <p> 2021 {data.title}. All rights reserved.</p>
                    <p> Made by DevEmmy </p>
            </div>
        </div>
    )
}

export default Footer
