import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';




const initialState = {

  username: 'Lambda School',
  password: 'i<3Lambd4',
  isFetching: false

}

const Login = props => {

  const [login, setLogin] = useState(initialState)

  const handleChanges = e => {
    setLogin({
      ...login, [e.target.name]: e.target.value

    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleLogin = e => {
    e.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post('/api/login', login)
      .then(response => {
        console.log("login post info", response)
        // res.data.payload
        // redux - send the token to the redux store
        localStorage.setItem('token', response.data.payload)
        props.history.push('/bubble-page')
      }).catch(err => { console.log("error in post log in", err) })
  }



  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
      </div>


      <div>
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <input
            label="Username"
            type="text"
            name="username"
            placeholder='username'
            value={login.username}
            onChange={handleChanges}
          />
          <input
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChanges}
          />


          <button>Log in</button>
          {login.isFetching && 'Bubbles'}
        </form>
      </div>
    </>
  );
};


export default Login;