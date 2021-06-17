import { useState } from 'react';
import Login from './login';
import Signup from './signup';

import { Button, Divider } from '@chakra-ui/react';

import './loginSignup.css';

export default function LoginSignup() {

    const [showLogin, setShowLogin] = useState<any>(true);

    return (
        <div className="login-main-div">
            <div style={showLogin ? {display: 'none'}:{height: "50%", width: "30%", display:'flex', flexDirection:'column', alignItems: 'center', position:'fixed', marginRight: '35%'}}>
                <Login />
            </div>
            <div style={showLogin ? {height: "50%", width: "50%", display:'flex', flexDirection:'column', alignItems: 'center', position:'fixed', marginRight: '35%'}:{display:'none'}}>
                <Signup />
            </div>
            <Divider orientation="vertical" />
            <div style={{height: "50%", width: "50%", display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', position:'fixed', marginLeft: '35%'}}>
                <Button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Register" : "Login"}</Button>
            </div>

        </div>
    )
}