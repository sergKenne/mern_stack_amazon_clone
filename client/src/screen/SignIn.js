import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
      <div className="sign">
          <form action="" className='sign__form'>
              <h3 className="sign__title">Sign In</h3>
              <div className="sign__group">
                  <label className="sign__label">Email address</label>
                  <input className="sign__input" type="email" placeholder="Enter mail" required/>
              </div>
              <div className="sign__group">
                  <label className="sign__label">Password</label>
                  <input className="sign__input" type="password" placeholder="Enter passwoed" required />
              </div>
              <button className="sign__btn">Sign In</button>
              <p className="sign__text">
                  New customer?<Link to="/signup">Create your account</Link>
              </p>
          </form>
      </div>
  );
}

export default SignIn