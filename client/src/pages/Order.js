import React, { Component } from "react";
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react';
import Navigation from '../components/Navigation.js';
import Checkout from '../components/Checkout.js';
import API from "../utils/API";
import '../App.css';

class Order extends Component {

    state = {
        toys:[],
        username: "",
        lastName: "",
        phone: "",
        password: "",
        email:"",
        creditcard:"",
        firstName:"",
        streetAdress:"",
        city:"",
        state:"",
        zip:"",
        expire:""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        if (this.state.email && this.state.lastName) {
            API.createToy({
                username: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                message: this.state.message,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                creditcard: this.state.creditcard,
                streetAdress: this.state.streetAdress,
                city: this.state.city,
                zip: this.state.zip,
                state: this.state.state,
                expire: this.state.expire
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            window.location =  './send';
        }
    };

    render() {
        return (
            <div className='backgroundImage'>
            
            <Container text className="ordercontainer">
            <p>Order your kit today!</p> 
            <p>Your kit will include a Raspberry Pi, a heart, and instructions.</p>
            <br/>
            </Container>
                <Form>
                    <Form.Field className='formcontainer'>
                        <label>First Name</label>
                        <input placeholder='First Name'
                               control={Input}
                               value={this.state.firstName}
                               onChange={this.handleInputChange}
                               name="firstName"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name'
                               control={Input}
                               value={this.state.lastName}
                               onChange={this.handleInputChange}
                               name="lastName"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Street Address</label>
                        <input placeholder='Street Address'
                               control={Input}
                               value={this.state.streetAdress}
                               onChange={this.handleInputChange}
                               name="streetAdress"/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder='City'
                               control={Input}
                               value={this.state.city}
                               onChange={this.handleInputChange}
                               name="city"/>
                    </Form.Field>
                    <Form.Field>
                        <label>State</label>
                        <input placeholder='State'
                               control={Input}
                               value={this.state.state}
                               onChange={this.handleInputChange}
                               name="state"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Zip</label>
                        <input type='number' placeholder='Zip'
                               control={Input}
                               value={this.state.zip}
                               onChange={this.handleInputChange}
                               name="zip"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Credit Card Number</label>
                        <input type='number' placeholder='Credit Card Number'
                               control={Input}
                               value={this.state.creditcard}
                               onCtype='number' hange={this.handleInputChange}
                               name="creditcard"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Expiration</label>
                        <input type='date' placeholder='Expiration'
                               control={Input}
                               value={this.state.expire}
                               onChange={this.handleInputChange}
                               name="expire"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email Address</label>
                        <input type='email' placeholder='Email address'
                               control={Input}
                               value={this.state.email}
                               onChange={this.handleInputChange}
                               name="email"/>
                    </Form.Field>


                    <Button type='submit' control={Button}  disabled={!(this.state.email && this.state.lastName)}
                            onClick={this.handleFormSubmit}>Submit</Button>
                </Form>
                

                
            </div>
    );

    }
}
export default Order;
