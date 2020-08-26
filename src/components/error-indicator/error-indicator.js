import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="wrapper">
            <img src="https://avatanplus.com/files/resources/original/5783cc02c6863155dad4eafd.png" alt="Img" className="star"/>
            <span className="boom">Boom!</span>
            <span>Page not found!</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
};

export default ErrorIndicator;
