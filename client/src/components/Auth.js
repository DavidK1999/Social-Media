import React from 'react'
import {Modal, Form, Button, Divider} from 'semantic-ui-react'
import '../styles/auth.css'

const Auth = () => {
    return (
        <Modal open={true} id="auth-modal">
            <Modal.Header>Authenticate</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input type="text" name="username"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" name="password"/>
                    </Form.Field>
                    <Button>Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}
 
export default Auth;