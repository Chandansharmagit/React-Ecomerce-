import React from 'react'
import dd from '../images/ddd.jpeg'
import './preview.css'
import Accordian from '../Components/accordian'
export default function Preview() {
    return (
        <div>
            <div className="preview-pregination">

                <div className="header-pregination">
                    <hr />
                    <h1 className="header-text-preginations">
                         Product Preview 
                    </h1>
                    <hr />
                </div>
                <div className="row-preview-pregination">
                    <div className="col-pregination-preview">
                        <div className="new-pregination-product">
                            <img src={dd} alt="" className='image-add-to-cart' />

                        </div>

                    </div>
                    <div className="col-pregination-preview">
                        <div className="text-box-preview">
                            <h2 className='kalssier'>KLASSIER H/L 1/S CG # 02</h2>
                            <hr />

                            <h2 className="availability">Availability: <span className='stock'> 1 in Stock</span></h2>
                            <hr />
                            <h2 className="availability-sku">SKU: 110034756 </h2>
                            <hr />


                            <h2 className="price">Rs. 199,900</h2>

                            <hr />



                            <button type='btnn' id='add-to-cartss' className='to'>ADD TO CART</button>
                        </div>
                    </div>


                </div>
                <hr />
                <div className="overview">
                    <div className="overview-pregination">
                        <h1 className="title-pregination">
                            OVERVIEW
                        </h1>
                        <hr />

                        <div className="overView-box">
                            <h1 className="all-text-overview">Color :- CG#02-Sandstone</h1>
                            <h1 className="all-text-overview">Material :- Leather/PVC upholstery. Wooden frame.</h1>
                            <h1 className="all-text-overview">Size :- 122x93x73 CM</h1>
                            <h1 className="all-text-overview">Weight (kg):- 38</h1>
                            <h1 className="all-text-overview">Key Feature :- KLASSIKER Half Leather unique chesterfield 1 seater sofa. - Made of solid wood frame for a durable long life use. - High resilient Polyurethane foam for great seating comfort. - Made of imported genuine corrected grain leather. - Decorated with black gold pin. - Black Turned wooden legs. - Size: W.122 x L.93 x H.73 cm.</h1>

                        </div>
                    </div>

                    <hr />
                </div>
            </div>

            <Accordian/>
        </div>
    )
}
