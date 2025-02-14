import React from "react";
import { Link } from "react-router-dom";
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="container">
      <h1 className="heather">404</h1>
      <p className="message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="link">Go Back to Home</Link>
    </div>
    );
}

export { NotFoundPage }