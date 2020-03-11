import React from 'react'
import {useSelector} from 'react-redux'
import {Modal, Form, Button, Input} from 'semantic-ui-react'
import Authenticate from '../hooks/authenticate'
import '../styles/auth.css'

const Auth = () => {
    const route = useSelector(state => state.auth.route)
    const {handleInputChange, handleSubmit} = Authenticate()
    return (
        <Modal open={true} closeIcon id="auth-modal">
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