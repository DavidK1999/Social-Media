import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filterFetch} from '../redux/actions/nav'
import {Menu, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'


const Nav = () => {
    const currentUser = useSelector(state => state.auth.currentUser)
    
    return (
        <Menu vertical secondary id="nav">
            <Menu.Item
            icon="sticky note"
            />
            
            <NavLink exact to="/home" className="item">
             <Icon name="home"/>
             Home
            </NavLink>

            <NavLink exact to="/explore" className="item">
                <Icon name="globe"/>
                Explore
            </NavLink>
            
            <NavLink exact to={`/${currentUser}`} className="item">
                <Icon name="user circle"/>
                Profile
            </NavLink>
            
            <NavLink exact to="/logout" className="item">
                <Icon name="sign out"/>
                Log out
            </NavLink>
            
            <NavLink exact to="/create" className="item">
                <Icon name="plus"/>
                Create a Card
            </NavLink>
        </Menu>
    );
}
 
export default Nav;