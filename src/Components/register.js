import React, { useState } from 'react'
import '../css/register.css'
import { useNavigate } from 'react-router-dom';
import Accordian from './accordian'
export default function Register() {



  const navigate = useNavigate();

  //using the array usestate in the react js with the help of react js
  const [user, setuser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;


    setuser({ ...user, [name]: value })

  }


  const postData = async (e) => {
    e.preventDefault()

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
       
      })
    })

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("invalid registeration")

    }else{
      window.alert("sucessful registeration");
      navigate('/login');

    }


  }


  return (
    <>

      <div className='body-register'>


        <form method='POST' id='register-form'>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} required></input>

          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} required></input>

          <label for="contact">Contact Number:</label>
          <input type="tel" id="contact" name="phone" value={user.phone} onChange={handleInputs} required></input>

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} required></input>

          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="cpassword" value={user.cpassword} onChange={handleInputs} required></input>

          <button type="submit" onClick={postData}>Sign Up</button>
        </form>


      </div>
      <Accordian />

    </>
  )
}
