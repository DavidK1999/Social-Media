import React from 'react'
import Nav from './Nav'
import {Grid, Image} from 'semantic-ui-react'
import '../styles/layout.css'


const Layout = () => {
    return (
        <Grid columns={3} divided id="layout-grid">
            <Grid.Row>
            <Grid.Column id="left-column">
                <Nav/>
            </Grid.Column>
            <Grid.Column id="center-column">
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            </Grid.Row>
      </Grid>
    );
}
 
export default Layout;