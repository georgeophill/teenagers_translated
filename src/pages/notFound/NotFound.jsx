import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const notFoundStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#333',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        fontSize: '6rem',
        margin: '0',
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        marginBottom: '20px', // Add some spacing between the text and the button
    };

    return (
        <div style={notFoundStyle}>
            <h1 style={headingStyle}>404</h1>
            <p style={paragraphStyle}>Page not found</p>
            <Link to="/" style={{ fontSize: '1.2rem', textDecoration: 'underline', color: '#7951A0' }}>
                Click to Return to Home
            </Link>
        </div>
    );
}

export default NotFound;
