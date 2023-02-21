import './style.css'
import Layout from '../../Layout'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../../Redux/Actions';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const values = { name, email, password }

    if (name !== "" && email !== "" && password !== "") {

      dispatch(signup(values));
      navigate('../')

    }
    else {
      alert("Please fill all the input fileds")
    }

    setName("");
    setEmail("");
    setPassword("");


  }

  return (

    <Layout>
      <div className="signup-container">

        <h1 className="sign" align="center">
          Sign Up
        </h1> <br />

        <form onSubmit={handleSubmit} className="signup-form" >

          <input className="signup-input form-control" type="text" placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />
          <input className="signup-input form-control" type="email" placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <input className="signup-input form-control" type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit" className='btn btn-primary'> Register</button>

          <div className='mt-4 text-center'>
            <h6> Already a user ?
              <a href="/" className='signin-link'> Sign In</a>
            </h6>
          </div>

        </form>

      </div>
    </Layout>
  )
}

export default SignUp;



