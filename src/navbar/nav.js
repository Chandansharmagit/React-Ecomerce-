import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import dd from '../images/newimages.png';
import '../navbar/navbars.css'

import { FaShoppingCart } from "react-icons/fa";
export default function Nav(props) {
    return (
        <>


            <nav className="navbar sticky-top navbar-expand-lg  navbar-light " id='nav'>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='menus'>
                    <span className="navbar-toggler-icon"></span>


                </button>

                {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="profile-pic">
                                <img src="https://media.licdn.com/dms/image/D5603AQGTV-k3f6pQwQ/profile-displayphoto-shrink_800_800/0/1696966674511?e=2147483647&v=beta&t=8JhOjUpOSO3Nd3AGWUDssoPcHfeLp964koe9MtaO8wQ" alt="Profile Picture"></img>
                            </div>

                        </a>

                    </li>
                </ul> */}
                <div className="in-pc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" id='cart-icons' viewBox="0 0 16 16" >
                        <Link to='/cart'><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" className='bags' /></Link>
                    </svg><span className='bag-quantity'><span className='mm'>{props.count}</span></span>
                </div>




                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">

                            <i className="fa-solid fa-cart-shopping"></i>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bedding
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id='dropdown'>
                                <div className="row">
                                    <div className="col">
                                        <div className="col_image">
                                            <img src={dd} alt="" className='images_bed' />
                                            <Link className="dropdown-item" to="/about">Spring</Link>
                                            <Link className="dropdown-item" to="/cart">new page</Link>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                        <div className="col">
                                            <div className="col_image">
                                                <img src={dd} alt="" className='images_bed' />
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home items
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id='dropdown-home-items'>
                                <div className="row">
                                    <div className="col">
                                        <div className="col_image">
                                            <img src={dd} alt="" className='images_bed' />
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                        <div className="col_image">
                                            <img src={dd} alt="" className='images_bed' />
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                        <div className="col">
                                            <div className="col_image">
                                                <img src={dd} alt="" className='images_bed' />
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </div>
                                        </div>
                                        {/* <div className="col_image">
                                                <div className="last-image">
                                                    <img src={dd} alt="" className='images_bed' />
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                </div>

                                            </div> */}
                                    </div>
                                </div>


                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                FurinBox
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id='dropdown-furin-box'>
                                <div className="row">
                                    <div className="col">
                                        <div className="col_image">
                                            <img src={dd} alt="" className='images_bed' />
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                        <div className="col_image">
                                            <img src={dd} alt="" className='images_bed' />
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                        <div className="col">
                                            <div className="col_image">
                                                <img src={dd} alt="" className='images_bed' />
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/cartlist">cartlist <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/cart">cart <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/list">List <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">

                        <Link to='/cartlist'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" id='heart-icon'>
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" className='heart' />
                        </svg></Link><span className='loves'>{props.count}</span>

                        <div className="in-desktop">
                            <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" id='cart-icons' viewBox="0 0 16 16" >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" className='bags' />
                            </svg></Link><span className='bag-quantity'><span className='mm'>{props.count}</span></span>
                        </div>
                        <div className="logins">

                            <Link className='loginpage' to='/login'> <button className="btn btn-outline-success my-3 my-sm-2" id='loginss'>login !</button></Link>
                        </div>




                        <Link to="/register"> <button className="btn btn-outline-success my-2 my-sm-0" id='register'>Register</button> </Link>
                    </form>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="profile-pic">
                                    <img src="https://media.licdn.com/dms/image/D5603AQGTV-k3f6pQwQ/profile-displayphoto-shrink_800_800/0/1696966674511?e=2147483647&v=beta&t=8JhOjUpOSO3Nd3AGWUDssoPcHfeLp964koe9MtaO8wQ" alt="Profile Picture"></img>
                                </div>

                            </a>

                        </li>
                    </ul>




                </div>
            </nav>


        </>
    )
}
