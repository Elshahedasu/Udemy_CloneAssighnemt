import React from 'react';
import { NAV } from '../data';


export default function Header() {
return (
<header className="site-header full-header">
<div className="container header-row">
{/* Udemy Logo */}
<div className="logo-area">
<strong className="logo-text">udemy</strong>
</div>


{/* Explore */}
<a href="#" className="explore-link">Explore</a>


{/* Search bar */}
<div className="search-bar">
<span className="search-icon">🔍</span>
<input
type="text"
placeholder="Search for anything"
className="search-input"
/>
</div>


{/* Right-side nav items */}
<nav className="nav-right">
<a href="#" className="nav-link">Plans & Pricing</a>
<a href="#" className="nav-link">Udemy Business</a>
<a href="#" className="nav-link">Teach on Udemy</a>


{/* Cart icon placeholder */}
<span className="cart-icon">🛒</span>


<button className="btn-login">Log in</button>
<button className="btn-signup">Sign up</button>
<button className="btn-lang">🌐</button>
</nav>
</div>
</header>
);
}
