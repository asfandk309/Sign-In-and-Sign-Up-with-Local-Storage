import './style.css'
import React, { useState } from "react";
import Layout from '../../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../../Redux/Actions';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.users)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const values = { email, password };

    dispatch(signin(values));

    if (user.authUser) {
      navigate('../main');
    }

  }

  return (
    <Layout>
      <div className="login-container">

        <h1 className="sign" align="center">
          Sign in
        </h1> <br />

        <form onSubmit={handleSubmit} className="login-form">
          <input className="login-input form-control" type="email" placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> <br /> <br />
          <input className="login-input form-control mx-auto" type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> <br /> <br />
          <button
            type='submit'
            className='btn btn-primary login-button'>Login</button>
          <div className='mt-4 text-left'>
            <h6> don't have an account.
              <a href="/signup" className='signup-link'> Sign Up Now</a>
            </h6>
          </div>

        </form>


      </div>
    </Layout>
  );
}

export default Login;
