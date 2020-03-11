import React, {useState} from 'react'
import {Menu, Button} from 'semantic-ui-react'
import '../styles/nav.css'


const Nav = () => {
    const [activeItem, setActiveItem] = useState({})
    const handleItemClick = name => setActiveItem(name)
    return (
        <Menu vertical secondary id="nav">
            <Menu.Item
            icon="sticky note"
            />
            <Menu.Item 
            name="home"
            icon="home"
            active={activeItem === 'username'}
            content="Home"
            onClick={() => handleItemClick('home')}
            />
            <Menu.Item 
            name="profile"
            icon="user circle"
            active={activeItem === 'profile'}
            content="Profile"
            onClick={() => handleItemClick('profile')}
            />
            
            <Menu.Item 
            name="signout"
            icon="sign out"
            active={activeItem === 'signout'}
            content="Signout"
            onClick={() => handleItemClick('signout')}
            />

            <Menu.Item
            name="create"
            icon="plus"
            active={activeItem === 'create'}
            content="Create a Card"
            onClick={() => handleItemClick('create')}

            />
        </Menu>
    );
}
 
export default Nav;