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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = inputs;
        try {
            const { data } = await axios.post('/api/signin', { email, password });
            localStorage.setItem("token", data.token)
            setErrorMsg(data.msg)
            setTimeout(() => {
                setErrorMsg("")
                window.location.replace("/")
            },2000)
        } catch (err) {
            console.log(err.message);
        }
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
                 <strong>New customer ?</strong> <Link to="/signup">Create your account</Link>
              </p>
          </form>
      </div>
  );
}

export default SignIn