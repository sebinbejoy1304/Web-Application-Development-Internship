import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Template/images/favicon.png";

const SignUpForm = () => {

    const [userData, setUserData] = useState({ firstName: '', lastName: '', empid: '', email: '', username: '', password: '' });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5000/api/signup';
            const { userData: res } = await axios.post(url, userData);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500)
                setError(error.response.data.message);
        }
    }

    return (
        <div class="template-widget">
            <div class="container">
                <div class="template-title">
                    <h2>Sign up</h2>
                </div>
                <div class="template-body">
                    <div class="grid">
                        <div class="g-col-6">
                            <div class="input-row">
                                <label>First name</label>
                                <div class="input-group">
                                    <input type="text" class="input-ctrl" required value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}/>
                                </div>
                            </div>
                        </div>
                        <div class="g-col-6">
                            <div class="input-row">
                                <label>Last name</label>
                                <div class="input-group">
                                    <input type="text" class="input-ctrl" required value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}/>
                                </div>
                            </div>
                        </div>
                        <div class="g-col-6">
                            <div class="input-row">
                                <label>Employee ID</label>
                                <div class="input-group">
                                    <input type="text" class="input-ctrl" required value={userData.empid} onChange={(e) => setUserData({ ...userData, empid: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div class="g-col-6">
                            <div class="input-row">
                                <label>Email</label>
                                <div class="input-group">
                                    <input type="text" class="input-ctrl" required value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
                                </div>
                            </div>
                        </div>
                        <div class="g-col-6">
                            <div class="input-row">
                                <label>Username</label>
                                <div class="input-group">
                                    <input type="text" class="input-ctrl" required value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}/>
                                </div>
                            </div>
                        </div>
                        <div class="g-col-6">
                            <div class="input-row">
                                <label>Password</label>
                                <div class="input-group">
                                    <input type="password" class="input-ctrl" required value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/>
                                </div>
                            </div>
                        </div>
                        {error && <div className='g-col-12 validate-text'>{error}</div>}
                        <div class="g-col-12 text-right">
                            <div class="button-row">
                                <button class="primary-btn submit-btn" onClick={handleSubmit}>Submit</button>
                                <a href="/login" class="secondary-btn submit-btn">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;