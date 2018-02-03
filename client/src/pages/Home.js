import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment, Input, Container } from 'semantic-ui-react';
import Navigation from '../components/Navigation.js';
import Landing from '../components/Landing.js';
import { Link } from 'react-router-dom'
import FormErrors from "../components/FormErrors.js";
import '../App.css';
import API from "../utils/API";
// let username ="";
class Home extends Component {
    state = {
        toys: [],
        username: "",
        id: 1,
        password:"",
        formErrors: {username: '', password: ''},
        usernameValid: false,
        passwordValid: false,
        formValid: false
    };

    // componentDidMount() {
    //     this.loadToys();
    // }
//
// // Loads all books  and sets them to this.state.books
//     API.updateToy({
//     username: this.state.username,.then(res => this.loadToys()).catch(err => console.log(err))
// })

    updateUser = () => {
        API.userToy(this.state.username).then(res => API.updateToy({
            username: this.state.username,
        }))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

        handleUserInput = (e) => {
          const name = e.target.name;
          const value = e.target.value;
          this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField = (fieldName, value) => {
      let fieldValidationErrors = this.state.formErrors;
      let usernameValid = this.state.usernameValid;
      let passwordValid = this.state.passwordValid;

      switch(fieldName) {
        case 'username':
          usernameValid = value.length >= 5;
          fieldValidationErrors.username = usernameValid ? '' : ' is too short';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      usernameValid: usernameValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
    }




    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username) {
            // const name = this.state.username;
            // console.log(name);
            this.updateUser();
            window.location =  './send';

        }
    };

    render() {
        return (
            <div className='backgroundImage'>
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid
                    textAlign='center'

                    verticalAlign='middle'
                >
                    <Grid.Column>
                        <Header as='h2' color='red' textAlign='center'>
                            <Image src='./heart.ico'/>
                            <p>Log-in to your account</p>
                        </Header>
                        <form className="loginform form" action="/login" method="post">
                            <div>
                              
                              <input className='username' placeholder='Username' type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.username} name="username"/>
                            </div>
                            <div>
                             
                              <input className='password' placeholder='Password' type="password" onChange={(event) => this.handleUserInput(event)} value={this.state.password} name="password"/>
                            </div>
                            <div>
                              <input className='loginbutton' disabled={!this.state.formValid} onClick={this.handleFormSubmit} type="submit" value="Log-in"/>
                            </div>
                            
                            
                            <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                            </div>
                        
                        </form>
                        <Container text id='order'>
                            New to us? <a href='/order'>Order now</a>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Home;
