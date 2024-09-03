import React from 'react'
import "../Template/fonts/stylesheet.css";
import "../Template/css/style.css";

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div class="template-header">
            <div class="container">
                <div class="header-title">
                    Welcome  User
                </div>
                <div class="nav-ctrl">
                    <div class="nav-link-row" id="nav-row">
                        <button class="close-btn" id="close-modal">
                            <svg class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>
                        </button>
                        <ul>
                            <li>
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/Addblog">Add Blog</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/Bugbounty">Bug Bounty Program</a>
                            </li>
                        </ul>
                    </div>
                    <div class="auth-ctrl">
                        <a href="/" class="logout-btn" onClick={handleLogout}>Logout</a>
                    </div>
                    <button class="handburger" id="handburger">
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;