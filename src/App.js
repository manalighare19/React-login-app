import React, { Component } from 'react';
import './App.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h2>
          <span className="font-weight-bold">OrangeHRM</span>
        </h2>
        <FormGroup>
          <Label>Login Name</Label>
          <Input type="email" placeholder="Login name"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Login</Button>
      </Form>
    );
  }
}

export default App;
