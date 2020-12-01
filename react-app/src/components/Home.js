import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <p>Downgrade documents</p>      
            <p>the grace and gaul</p>
            <p>of the fall</p>
            <p>the fleeting control</p>
            <p>amidst decline</p>
            <p>the joys of presence</p>
            <p>and forgetting</p>
            <ul className="mainLinks">
                <Link to="/dispatch" ><li>Dispatches</li></Link>
                <Link to="/glossary" ><li>Glossary</li></Link>
                <Link to="/materials" ><li>Materials</li></Link>
            </ul>
            <ul className="subLinks">
                <Link to="/about"><li>About</li></Link>
                <Link to="/support"><li>Support</li></Link>
                <Link to="/admin"><li>Admin</li></Link>
            </ul>
        </div>
    );
}

export default Home;