import React, {useEffect} from 'react'
import Nav from './Nav'
import Post from '../hooks/post'
import {Grid, Image, Icon, Form, Input, Button} from 'semantic-ui-react'
import '../styles/layout.css'
import { useDispatch, useSelector } from 'react-redux'
import {getPosts, post} from '../redux/actions/card'


const Layout = () => {
    const dispatch = useDispatch()
    const {handleInputChange, handleSubmit} = Post()
    const cards = useSelector(state => state.card.cards)
    
    useEffect(() => {
        dispatch(getPosts())
        console.log(cards)
    }, [cards.length])

    return (
        <Grid columns={3} divided id="layout-grid">
            <Grid.Column id="left-column">
                <Nav/>
            </Grid.Column>
            <Grid.Column id="center-column">
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
                
                <Grid.Row id="home-intro">
                    <h3>Welcome to Community Cards</h3>
                    <p>This is a twitter clone that captures the essentials of twitter</p>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
      </Grid>
    );
}
 
export default Layout;