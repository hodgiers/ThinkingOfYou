import React, { Component } from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Navigation from '../components/Navigation.js';
import Checkout from '../components/Checkout.js';
import API from "../utils/API";


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
        }
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
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
                        <input placeholder='Zip'
                               control={Input}
                               value={this.state.zip}
                               onChange={this.handleInputChange}
                               name="zip"/>p
                    </Form.Field>
                    <Form.Field>
                        <label>Credit Card Number</label>
                        <input placeholder='Credit Card Number'
                               control={Input}
                               value={this.state.creditcard}
                               onChange={this.handleInputChange}
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
                        <input placeholder='Email address'
                               control={Input}
                               value={this.state.email}
                               onChange={this.handleInputChange}
                               name="email"/>
                    </Form.Field>


                    <Button type='submit' control={Button}  disabled={!(this.state.email && this.state.lastName)}
                            onClick={this.handleFormSubmit}>Submit</Button>
                </Form>
                )

                <h1>Faq</h1>
                <p>
                    Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
                    molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
                    magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur.
                    In felis nisl, luctus non ante euismod, tincidunt bibendum mi. In a
                    molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna posuere,
                    eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque
                    nec metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla
                    facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh dictum
                    ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
                    Etiam vel condimentum magna, quis tempor nulla.
                </p>

            </div>
    );

    }
}
export default Order;
