import React,{ useEffect, useState } from 'react'
import data from './data'

function Gallery() {

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
        <div className='gallery'>
            <div className="gallery_title">
                <h3> { data.galleryTitle }</h3>

                <div className="btn">SEE ALL</div>
            </div>

            <div className="main-gallery">
                { data.gallery.map((item)=>{
                    const { id, img, imgsm, text } = item;
                    return(
                        <div key={id}>
                            <img src={width > 800 ? img : imgsm } />
                            <div className="hoverEffect" />
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
