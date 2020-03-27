import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Authenticate from '../hooks/authenticate'
import {Grid, Form, Input, Button, Icon, Header, Menu} from 'semantic-ui-react'
import '../styles/entry.css'
import { useSelector } from 'react-redux'

const Entry = () => {
    const [route, setRoute] = useState()
    const {handleInputChange, handleSubmit} = Authenticate()
    const logged = useSelector(state => state.auth.loggedIn)

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
                    <Link to="/register"><Button id="register-button">Register</Button></Link>
                    <Link to="/login"><Button id="login-button">Log in</Button></Link>
                </div>
                </Grid.Row>

            </Grid.Column>
            
            <Grid.Row id="footer">
            <button onClick={()=>console.log(logged)}>LOGGEED</button>
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