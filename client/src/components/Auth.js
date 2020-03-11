import React from 'react'
import {useSelector} from 'react-redux'
import {Modal, Form, Button, Input} from 'semantic-ui-react'
import Authenticate from '../hooks/authenticate'
import '../styles/auth.css'

const Auth = () => {
    const route = useSelector(state => state.auth.route)
    const {handleInputChange, handleSubmit} = Authenticate()
    return (
        <Modal open={route} closeIcon id="auth-modal">
            <Modal.Header>Authenticate</Modal.Header>
            <Modal.Content>
                <Form onSubmit={(e) => handleSubmit(e, route)}>
                    <Form.Field>
                        <label>Username</label>
                        <Input 
                        focus 
                        icon="user" 
                        iconPosition="left" 
                        type="text" 
                        name="username"
                        onChange={handleInputChange}
                    />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <Input 
                        icon="mail" 
                        iconPosition="left" 
                        type="email" 
                        name="email"
                        onChange={handleInputChange}
                    />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input 
                        icon="asterisk" 
                        iconPosition="left" 
                        type="password" 
                        name="password"
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