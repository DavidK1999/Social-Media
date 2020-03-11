import React from 'react';
import Authenticate from '../hooks/authenticate'
import {Header, Icon, Form, Input, Button} from 'semantic-ui-react'
import '../styles/login.css'

const Login = () => {
    const route = window.location.pathname.substring(1)
     const {handleInputChange, handleSubmit} = Authenticate()
    return (
        <div id="login">
        <div id="login-header">
            <Header as="h2"><Icon name="sticky note"/></Header>
            <h2>Log in to Community Cards</h2>
        </div>
        <Form onSubmit={(e) => handleSubmit(e, route)}>
            <Form.Field>
                <Input 
                    focus 
                    type="email" 
                    name="email"
                    placeholder="email"
                    onChange={handleInputChange}
                />
            </Form.Field>
            <Form.Field>
                <Input 
                    focus 
                    type="password" 
                    name="password"
                    placeholder="password"
                    onChange={handleInputChange}
                />
            </Form.Field>
            <Button>Log in</Button>
        </Form>
        </div>
    );
}
 
export default Login;