import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [inputs, setInputs] = useState({
        country: '',
        postal: '',
        fullname: '',
        location: '',
        address: "",
        city: ""
    });

    const handleChange = (e) => {
        setInputs((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className="sign">
            <form action="" className="sign__form" onSubmit={handleSubmit}>
                <h3 className="sign__title">Shipping Address</h3>
                <div className="sign__alert">{errorMsg}</div>
                <div className="sign__group">
                    <label className="sign__label">Full Name</label>
                    <input
                        onChange={handleChange}
                        name="fullname"
                        className="sign__input"
                        type="text"
                        placeholder="Enter Your Full Name"
                        required
                    />
                </div>
                <div className="sign__group">
                    <label className="sign__label">Address</label>
                    <input
                        onChange={handleChange}
                        name="address"
                        className="sign__input"
                        type="text"
                        placeholder="Enter Address"
                        required
                    />
                </div>
                <div className="sign__group">
                    <label className="sign__label">City</label>
                    <input
                        onChange={handleChange}
                        name="city"
                        className="sign__input"
                        type="text"
                        placeholder="Enter City"
                        required
                    />
                </div>
                <div className="sign__group">
                    <label className="sign__label">Postal Code</label>
                    <input
                        onChange={handleChange}
                        name="postal"
                        className="sign__input"
                        type="text"
                        placeholder="Enter Code Postal"
                        required
                    />
                </div>
                <div className="sign__group">
                    <label className="sign__label">Country</label>
                    <input
                        onChange={handleChange}
                        name="country"
                        className="sign__input"
                        type="text"
                        placeholder="Enter Country"
                        required
                    />
                </div>
                <div className="sign__group">
                    <label className="sign__label">Location</label>
                    <input
                        onChange={handleChange}
                        name="location"
                        className="sign__input"
                        type="text"
                        placeholder="Enter Your Location"
                        required
                    />
                </div>
                <button className="sign__btn" disabled>Continue</button>
                {/* <p className="sign__text">
                    lready have an account?<Link to="/signin"> Sign-In</Link>
                </p> */}
            </form>
        </div>
    );
};

export default Shipping;
