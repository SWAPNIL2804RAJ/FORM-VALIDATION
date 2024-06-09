import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css'; // Importing Form.css

const FormPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'E-mail is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone No. is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Redirect to success page
      navigate('/success', { state: { formData } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Registration Form</h1>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone No.</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          {formData.country === 'India' && (
            <>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </>
          )}
          {formData.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </>
          )}
          {formData.country === 'UK' && (
            <>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
            </>
          )}
          {formData.country === 'Australia' && (
            <>
              <option value="Canberra">Canberra</option>
              <option value="Sydney">Sydney</option>
            </>
          )}
          {formData.country === 'Canada' && (
            <>
              <option value="Victoria">Victoria</option>
              <option value="Winnipeg">Winnipeg</option>
            </>
          )}
          {formData.country === 'Germany' && (
            <>
              <option value="Berlin">Berlin</option>
              <option value="Hamburg">Hamburg</option>
            </>
          )}
          {formData.country === 'France' && (
            <>
              <option value="Paris">Paris</option>
              <option value="Marseille">Marseille</option>
            </>
          )}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>Pan No.</label>
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No.</label>
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
};

export default FormPage;