import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate =  useNavigate()
    const [errorMsg, setErrorMsg] = useState('');
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    console.log("inputs:", inputs);

    const handleChange = (e) => {
        setInputs((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const { name, email, password, password2 } = inputs 

        try {
            const { data } = await axios.post('/api/register', { name, email, password, password2 });
            console.log('data:', data);
            !!data && navigate('/signin');
        } catch (err) {
            console.log(err.message);
            setErrorMsg(err.message)
        }

    }

  return (
      <div className="sign">
          <form action="" className="sign__form" onSubmit={handleSubmit}>
              <h3 className="sign__title">Create Account</h3>
              <div className="sign__alert">{errorMsg}</div>
              <div className="sign__group">
                  <label className="sign__label">Name</label>
                  <input
                      onChange={handleChange}
                      name="name"
                      className="sign__input"
                      type="text"
                      placeholder="Enter Name"
                      required
                  />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Email address</label>
                  <input
                      onChange={handleChange}
                      name="email"
                      className="sign__input"
                      type="email"
                      placeholder="Enter mail"
                      required
                  />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Password</label>
                  <input
                      onChange={handleChange}
                      name="password"
                      className="sign__input"
                      type="password"
                      placeholder="Enter password"
                      required
                  />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Confirm Password</label>
                  <input
                      onChange={handleChange}
                      name="password2"
                      className="sign__input"
                      type="password"
                      placeholder="Enter Confirm password"
                      required
                  />
              </div>
              <button className="sign__btn">Register</button>
              <p className="sign__text">
                 <strong>I ready have an account ? </strong> <Link to="/signin"> Sign-In</Link>
              </p>
          </form>
      </div>
  );
}

export default SignUp