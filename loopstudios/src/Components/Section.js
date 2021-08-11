import React, { useEffect, useState } from 'react'
import data from './data'

function Section() {

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
        <div className='section'>
            <img src={ width > 800 ? data['section-img'] : data['section-img2'] } alt="sectionImg"/>
            <div className="section-text">
                <h1> { data.textHead }</h1>
                <p>
                    { data.textParagraph}
                </p>
            </div>
        </div>
    )
}

export default Section
