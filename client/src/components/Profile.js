import React from 'react'
import {Grid, Image, Icon} from 'semantic-ui-react'
import '../styles/profile.css'

const Profile = () => {
    return (
        <>
        <Grid.Row>
            Username
        </Grid.Row>
        <Grid.Row id="banner">
            <Image src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/88/4d/9a.jpg" fluid/>
        </Grid.Row>
        <Grid.Row id="edit">
            <Icon name="user circle"/>
        </Grid.Row>
        <Grid.Row>
            Information
        </Grid.Row>
        </>
    );
}
 
export default Profile;