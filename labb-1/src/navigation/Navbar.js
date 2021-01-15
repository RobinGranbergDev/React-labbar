import React, {useState} from 'react'
import './Navbar.css'

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    const [signIn, setSignIn] = useState('Sign In');

    const auth = () => {
        setToggle(prev => !prev);

        if(signIn === 'Sign In') {
            setSignIn('Robin Granberg');
        }
        else {
            setSignIn('Sign In')
        }
    
        
    }

    return (
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li><button onClick={auth} className={toggle ? 'active' : ''}>{signIn}</button></li>
            </ul>
        </nav>
    )
}
