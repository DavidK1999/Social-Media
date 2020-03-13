import React, {useEffect} from 'react'
import Nav from './Nav'
import Post from '../hooks/post'
import CardList from './CardList'
import Feed from './Feed'
import PersonalCardList from './PersonalCardList'
import {Grid, Icon, Form, Input, Button} from 'semantic-ui-react'
import {Route} from 'react-router-dom'
import '../styles/layout.css'
import { useDispatch, useSelector } from 'react-redux'
import {getPosts} from '../redux/actions/card'


const Layout = () => {
    const dispatch = useDispatch()
    const {handleInputChange, handleSubmit} = Post()
    const cards = useSelector(state => state.card.cards)
    const filter = useSelector(state => state.nav.filter)
    
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
                
                {
                    cards.length === 0 
                ?
                    <Grid.Row id="home-intro">
                        <h3>Welcome to Community Cards</h3>
                        <p>This is a twitter clone that captures the essentials of twitter</p>
                    </Grid.Row>
                : 
                    null
                }
                
                <Route exact path={["/home", "/explore"]} component={Feed}/>

            
            </Grid.Column>
            <Grid.Column id="layout-right-column">
            </Grid.Column>
      </Grid>
    );
}
 
export default Layout;