import React, { useState } from 'react'
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import Accordian from './accordian';
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const LoginUser = async (e) => {
        e.preventDefault();


        const res = await fetch("/sigin", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password

            })
        })

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("invalid registeration")

        } else {
            window.alert("sucessful registeration");
            navigate('/home');

        }




    }
    return (
        <>

            <div className='body-body'>
                <div class="containers">
                    <div class="cards">
                        <h2 id='login-h2'>Login</h2>
                        <form method='POST'>
                            <input type="text" id="username" name="email" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            <button type="submit" id='login-pass'onClick={LoginUser}>Login</button>
                            <button type="btn" className='forgot-pass' >Forgot password</button>
                        </form>
                    </div>
                </div>



            </div>
            <Accordian />
        </>
    )
}
