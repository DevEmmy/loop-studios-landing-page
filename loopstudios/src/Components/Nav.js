import { XIcon } from '@heroicons/react/solid'
import React from 'react'
import data from './data.js'

function Nav({pro, left}) {
    return (
        <div className='head-nav' style={{marginLeft:left}}>
            <div className="nav-head-container">
                <h3>{data.title}</h3>
                <XIcon width='36px' onClick={()=> pro(false)}/>
            </div>
            <div className="nav-menu">
                { data.nav.map((items)=>{

                    return(
                        <li>{items}</li>
                    )
                        
                })}
            </div>
        </div>
    )
}

export default Nav
