import React from 'react'
import {Grid, Form, Input, Button, Icon, Header, Menu} from 'semantic-ui-react'
import '../styles/entry.css'

const Entry = () => {
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
        <Grid.Column>
            <Grid.Row>
                <Form id="entry-form">
                    <Form.Field>
                        <Input 
                        focus 
                        placeholder="Email"
                        type="email" 
                        name="email"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                        focus 
                        placeholder="Password"
                        type="password" 
                        name="password"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Button>Log in</Button>
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
        </Grid>
    )
}
 
export default Entry;