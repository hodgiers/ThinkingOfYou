import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
    <Form>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <label>Street Address</label>
            <input placeholder='Street Address' />
        </Form.Field>
        <Form.Field>
            <label>City</label>
            <input placeholder='City' />
        </Form.Field>
        <Form.Field>
            <label>State</label>
            <input placeholder='State' />
        </Form.Field>
        <Form.Field>
            <label>Zip</label>
            <input placeholder='Zip' />
        </Form.Field>
        <Form.Field>
            <label>Credit Card Number</label>
            <input placeholder='Credit Card Number' />
        </Form.Field>
        <Form.Field>
            <label>Expiration</label>
            <input type='date' placeholder='Expiration' />
        </Form.Field>
        <Form.Field>
            <label>Email Address</label>
            <input placeholder='Email address' />
        </Form.Field>


        <Button type='submit'>Submit</Button>
    </Form>
)


export default FormExampleForm;