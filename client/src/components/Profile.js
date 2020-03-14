import React from 'react'
import Feed from './Feed'
import {NavLink} from 'react-router-dom'
import {Grid, Image, Icon, Menu} from 'semantic-ui-react'
import '../styles/profile.css'

const Profile = () => {
    return (
        <>
        <Grid.Row id="top">
            <NavLink to="/home"><Icon name="arrow left"/></NavLink>
            <div>
                <h3>David Kalina</h3>
                <small> 0 posts</small>
            </div>
        </Grid.Row>
        <Grid.Row id="banner">
            <Image src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/88/4d/9a.jpg" fluid/>
        </Grid.Row>
        <Grid.Row id="information">
            <Icon name="user circle"/>
            <div className="information-text">
                <h3>David Kalina</h3>
                <p>@DavidKalina</p>
                <div className="profile-stats">
                <span className="num">0</span> Following <span className="num">0</span> Followers
                </div>
            </div>
            <Menu pointing secondary id="profile-nav">
            <NavLink to="/profile">Cards</NavLink>
            <NavLink to="/likes">Likes</NavLink>
            </Menu>
        </Grid.Row>
        <Grid.Row>
            <Feed/>
        </Grid.Row>
        </>
    );
}
 
export default Profile;