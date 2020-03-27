import React from 'react'
import {Modal, Form, Button, TextArea} from 'semantic-ui-react'
import Post from '../hooks/post'
import '../styles/create.css'

const CreateCard = () => {
    const {handleInputChange, handleSubmit} = Post()
    return (
        <Modal open={true} id="create-modal" centered={false}>
            <Modal.Header>Create a Card</Modal.Header>
            <Modal.Content>
                <Form onSubmit={(e) => handleSubmit(e, '/post')}>
                    <Form.Field>
                        <TextArea placeholder="Create a card" onChange={handleInputChange} name="body"/>
                    </Form.Field>
                    <Button>Post</Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}
 
export default CreateCard;