import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';



class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        // res.data.payload
        // redux - send the token to the redux store
        // browser storage - localStorage (this is probably the least secure choice)
        // cookies
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/protected');
      })
      .catch(err => console.log({ err }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Log in</button>




        </form>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
      </div>
    );
  };
}

export default Login;
