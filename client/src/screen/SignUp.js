import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
      <div className="sign">
          <form action="" className="sign__form">
              <h3 className="sign__title">Create Account</h3>
              <div className="sign__group">
                  <label className="sign__label">Name</label>
                  <input className="sign__input" type="text" placeholder="Enter Name" required />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Email address</label>
                  <input className="sign__input" type="email" placeholder="Enter mail" required />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Password</label>
                  <input
                      className="sign__input"
                      type="password"
                      placeholder="Enter passwoed"
                      required
                  />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Confirm Password</label>
                  <input
                      className="sign__input"
                      type="password"
                      placeholder="Enter Confirm passwoed"
                      required
                  />
              </div>
              <button className="sign__btn">Register</button>
              <p className="sign__text">
                  lready have an account?<Link to="/signin"> Sign-In</Link>
              </p>
          </form>
      </div>
  );
}

export default SignUp