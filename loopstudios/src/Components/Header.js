import React, { useState, useEffect } from 'react'
import data from './data.js'
import { MenuIcon } from '@heroicons/react/solid'
import Nav from './Nav.js'

function Header() {
    
    const [ nav, setNav] = useState(false);
    
    let [width, setWidth] = useState(window.innerWidth)

    const setSize = ()=>{
        setWidth(window.innerWidth)
        console.log(width)
    }
    useEffect(() => {
     window.addEventListener('resize', setSize)
     return ()=>{ 
         console.log(width)
        window.removeEventListener('resize', setSize)
     }
    
    }, []);
    
    return (
        <div className='header'>
            <div className="nav-container">
                {nav ?  <Nav pro = {setNav } left='0px'/> : <Nav pro = {setNav } left='-100%'/>}
            </div>
            


            <img src={ width > 800 ? data['head-img'] : data['head-img2']} alt="header"  />
            <div className='lightdark' />
            <div className="nav-items">
                <div className="head-title">
                    <h3>{data.title}</h3>
                </div>
                { width > 700 ?
                <div className="nav-content">
                        { data.nav.map((items)=>{
                            return(
                                <li>{items}</li>
                            )
                        }) }
                </div> : <MenuIcon width='36px' onClick={()=> setNav(true)}/>
}
                
            </div>

            <div className="head-content">
                { data['title-content']}
            </div>
        </div>
    )
}
export default Header
