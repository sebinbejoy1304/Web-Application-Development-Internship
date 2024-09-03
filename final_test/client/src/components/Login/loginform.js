import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../Template/images/logo-main.png";
import "../Template/fonts/stylesheet.css";
import "../Template/css/style.css";

const LoginForm = () => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5000/api/auth';
            const res = await axios.post(url, userData);
            localStorage.setItem("token", res.data);
            localStorage.setItem("username", userData.username);
            window.location = '/';
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500)
                setError(error.response.data.message);
        }
    }

    return (
        <div className="login-widget">
            <div className="login-banner">
                <div className="header-widget">
                    <a href="/" className="t-logo">
                        <img src={logo} alt="" />
                    </a>
                    <Link to='/signup' className="signup-btn">Sign Up</Link>
                </div>
                <div className="banner-content">
                    <h2>Fed Interact</h2>
                </div>
                <div className="bannner-btm">
                    <p>© 2021. All Rights Reserved. Powered by The Federal Bank Limited</p>
                </div>
            </div>
            <div className="login-form">
                <div className="form-row">
                    <h2>Login</h2>
                    <div className="input-row">
                        <label>Username</label>
                        <div className="input-group">
                            <input type="text" className="input-ctrl" required value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                        </div>

                    </div>
                    <div className="input-row">
                        <label>Password</label>
                        <div className="input-group">
                            <input type="password" class="input-ctrl" required value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div>

                    </div>
                    {error && <div>{error}</div>}
                    <button type="submit" className="form-submit" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;