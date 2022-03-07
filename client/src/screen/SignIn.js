import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (e) => {
        setInputs((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = inputs;
        axios
            .post(
                '/api/signin',
                {
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        //Authorization: 'Bearer ' + this.$gate.token(),
                    },
                },
            )
            .then((res) => {
                console.log(res.data);

                setInputs({
                    email: '',
                    password: '',
                });
                
            })
            .catch((e) => {
                console.log(e.message)
                setErrorMsg("Email or Password is not correct please try again...")
            });
    };


  return (
      <div className="sign">
          <form action="" className="sign__form" onSubmit={handleSubmit}>
              <h3 className="sign__title">Sign In</h3>
              <div className="sign__alert">{errorMsg}</div>
              <div className="sign__group">
                  <label className="sign__label">Email address</label>
                  <input
                      name="email"
                      onChange={handleChange}
                      className="sign__input"
                      type="email"
                      placeholder="Enter mail"
                      required
                  />
              </div>
              <div className="sign__group">
                  <label className="sign__label">Password</label>
                  <input
                      name="password"
                      onChange={handleChange}
                      className="sign__input"
                      type="password"
                      placeholder="Enter password"
                      required
                  />
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