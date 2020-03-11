import React, {useState} from 'react'
import Authenticate from '../hooks/authenticate'
import {Grid, Form, Input, Button, Icon, Header, Menu} from 'semantic-ui-react'
import '../styles/entry.css'
import {authenticate} from '../redux/actions/auth'
import {useDispatch} from 'react-redux'

const Entry = () => {
    const [route, setRoute] = useState()
    const dispatch = useDispatch()
    const {handleInputChange, handleSubmit} = Authenticate()

    return (
        <Grid columns={2} divided id="entry-grid">
        <Grid.Column id="left-entry-column">
            <Menu id="description-menu" vertical secondary>
                <Menu.Item 
                icon="search"
                name="Follow your interests."/>
                <Menu.Item 
                icon="users"
                name="Hear what other people are talking about."/>
                <Menu.Item
                icon="comment outline" 
                name="Join the conversation."/>
            </Menu>
        </Grid.Column>
        <Grid.Column id="right-entry-column">
            <Grid.Row>
                <Form id="entry-form" onSubmit={(e) => handleSubmit(e, route)}>
                    <Form.Field>
                        <Input 
                        focus 
                        placeholder="Email"
                        type="email" 
                        name="email"
                        onChange={handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                        focus 
                        placeholder="Password"
                        type="password" 
                        name="password"
                        onChange={handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Button onClick={() => setRoute('login')}>Log in</Button>
                    </Form.Field>
                </Form>
            </Grid.Row>
            <Grid.Row id="right-column-bottom-row">
            <div id="description">
                <Header as="h1">
                    <Icon name="sticky note"/>
                </Header>
                <Header as="h1">See what's happening in the world right now</Header>
            </div>

            <div id="modal-buttons">
                <p>Join Community Cards today.</p>
                <Button id="register-button">Register</Button>
                <Button id="login-button">Log in</Button>
            </div>
            </Grid.Row>
        </Grid.Column>
        <Grid.Row id="footer">
            <h6>About</h6>
            <h6>About</h6>
            <h6>About</h6>
            <h6>About</h6>
            <h6>About</h6>
            <h6>About</h6>
        </Grid.Row>
        </Grid>
    )
}
 
export default Entry;