import React from 'react'
import Post from '../hooks/post'
import Feed from './Feed'
import {Grid, Icon, Form, Input, Button} from 'semantic-ui-react'
import '../styles/layout.css'

const Home = () => {
    const {handleInputChange, handleSubmit} = Post()

    return (
        <>
        <Grid.Row id="home-row">
            Home
        </Grid.Row>
        <Grid.Row id="home-menu">
                    <Icon name="user circle outline"/> 
                    <Form onSubmit={(e) => handleSubmit(e, '/post')}>
                        <Form.Field>
                            <Input 
                            type="text" 
                            name="body" 
                            placeholder="What's happening?"
                            onChange={handleInputChange}
                            />
                        </Form.Field>
                        <Button>Submit</Button>
                    </Form>
        </Grid.Row>
        <Feed/>
        </>
    );
}
 
export default Home;