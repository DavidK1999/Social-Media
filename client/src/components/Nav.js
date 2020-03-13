import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {filterFetch} from '../redux/actions/nav'
import {Menu, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'


const Nav = () => {
    
    return (
        <Menu vertical secondary id="nav">
            <Menu.Item
            icon="sticky note"
            />
            
            <NavLink to="/home" className="item">
             <Icon name="home"/>
             Home
            </NavLink>

            <NavLink to="/explore" className="item">
                <Icon name="globe"/>
                Explore
            </NavLink>
            
            <NavLink to="/profile" className="item">
                <Icon name="user circle"/>
                Profile
            </NavLink>
            
            <NavLink to="/logout" className="item">
                <Icon name="sign out"/>
                Log out
            </NavLink>
            
            <NavLink to="/create" className="item">
                <Icon name="plus"/>
                Create a Card
            </NavLink>
            
        </Menu>
    );
}
 
export default Nav;