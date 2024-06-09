// src/components/SuccessPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const formData = state?.formData || {};

  return (
    <div className="success-container">
      <h1>Form Submitted Successfully!</h1>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Form</button>
    </div>
  );
};

export default SuccessPage;