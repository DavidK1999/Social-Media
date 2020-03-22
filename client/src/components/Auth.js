import React from 'react'
import {Modal, Form, Button, Input} from 'semantic-ui-react'
import Authenticate from '../hooks/authenticate'
import '../styles/auth.css'

const Auth = () => {
    const route = window.location.pathname.substring(1)
    const {handleInputChange, handleSubmit} = Authenticate()

    
    return (
        <Modal open={true} id="auth-modal">
            <Modal.Content>
                <Form onSubmit={(e) => handleSubmit(e, route)}>
                    <h3>Create Your Account</h3>
                    <Form.Field>
                        <Input 
                        focus 
                        type="text" 
                        name="username"
                        placeholder="Username"
                        onChange={handleInputChange}
                    />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                    />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                    />
                    </Form.Field>
                    <Button>Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}
 
export default Auth;