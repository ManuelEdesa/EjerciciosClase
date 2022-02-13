import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
  }

  login() {
    this.setState({
      user: this.inputUser.current.value,
      password: this.inputPassword.current.value,
    });
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
  
      return (
        <div className="main-site">
          <h1>Bienvenido</h1>
          
        </div>
      );
    
  }

  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}

export default Home;
