import React from 'react'
import Nav from './Nav'
import Home from '../components/Home'
import Feed from './Feed'
import Profile from './Profile'
import {Grid} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
import '../styles/layout.css'
import {useSelector} from 'react-redux'


const Layout = () => {
    const cards = useSelector(state => state.card.cards)
    
    return (
        <Grid columns={3} divided id="layout-grid">
            <Grid.Column id="left-column">
                <Nav/>
            </Grid.Column>
            <Grid.Column id="center-column">

            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/explore" component={Feed}/>
                <Route exact path={["/:username", "/:username/likes"]} component={Profile}/>
            </Switch>
                 
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
                


            
            </Grid.Column>
            <Grid.Column id="layout-right-column">
            </Grid.Column>
      </Grid>
    );
}
 
export default Layout;