import React from 'react'
import dd from '../images/sofa.webp';
import './productSlideslide.css'

import Imagegrid from './imagegrid';
export default function ProductSlide() {
    return (
        <>
            <div className="row-pregination-slider">
                <div className="col-pregination-slider">





                    <div className="main-sofa-image">

                        <img src={dd} alt="" className="fabric-sofa" />




                    </div>
                </div>
                <div className="col-pregination-sliderr">

                    <div className="main-sofa-images">

                       <Imagegrid/>

                    </div>
                </div>
            </div>
        </>
    )
}
