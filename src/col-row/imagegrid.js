import React, { useState } from 'react'
import Masonry from "react-responsive-masonry"
import dd from '../images/newimages.png';
import '../col-row/newgrids.css'

export default function Imagegrid() {




    return (
        <>
            <div className="containerrs">


                <div className="item">
                    <img src={dd} alt=""className='images-pregination-grid' />
                    <div className="color">
                        <h3>new sofa </h3>
                    </div>
                </div>

                <div className="item">
                    <img src={dd} alt="" className='images-pregination-grid'/>
                    <div className="color">
                        
                        <h3>new sofa </h3>
                    </div>
                </div>
                <div className="item">
                    <img src={dd} alt="" className='images-pregination-grid'/>
                    <div className="color">
                        
                        <h3>new sofa </h3>
                    </div>
                </div>
                <div className="item">
                    <img src={dd} alt="" className='images-pregination-grid'/>
                    <div className="color">
                        
                        <h3>new sofa </h3>
                    </div>
                </div>
                <div className="item">
                    <img src={dd} alt="" className='images-pregination-grid'/>
                    <div className="color">
                        
                        <h3>new sofa </h3>
                    </div>
                </div>
                <div className="item">
                    <img src={dd} alt="" className='images-pregination-grid'/>
                    <div className="color">
                        
                        <h3>new sofa </h3>
                    </div>
                </div>
                <div className="item">
                    <img src={dd} alt="" className='images-pregination-grid'/>
                    <div className="color">
                        
                        <h3>new sofa </h3>
                    </div>
                </div>



            </div>
        </>


    )
}

