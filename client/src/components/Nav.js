import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {filterFetch} from '../redux/actions/nav'
import {Menu, Button} from 'semantic-ui-react'
import '../styles/nav.css'


const Nav = () => {
    const dispatch = useDispatch()
    const [activeItem, setActiveItem] = useState({})
    
    const handleItemClick = (name, filter) => {
        setActiveItem(name)
        dispatch(filterFetch(filter))
    }
    
    return (
        <Menu vertical secondary id="nav">
            <Menu.Item
            icon="sticky note"
            />
            
            <Menu.Item 
            name="home"
            icon="home"
            active={activeItem === 'home'}
            content="Home"
            onClick={() => handleItemClick('home', 'personal')}
            />
            
            <Menu.Item 
            name="explore"
            icon="globe"
            active={activeItem === 'explore'}
            content="Explore"
            onClick={() => handleItemClick('explore', 'global')}
            />
            <Menu.Item 
            name="profile"
            icon="user circle"
            active={activeItem === 'profile'}
            content="Profile"
            onClick={() => handleItemClick('profile', '')}
            />
            
            <Menu.Item 
            name="signout"
            icon="sign out"
            active={activeItem === 'signout'}
            content="Signout"
            onClick={() => handleItemClick('signout', '')}
            />

            <Menu.Item
            name="create"
            icon="plus"
            active={activeItem === 'create'}
            content="Create a Card"
            onClick={() => handleItemClick('create', '')}

            />
            <button onClick={()=>console.log(activeItem)}></button>
        </Menu>
    );
}
 
export default Nav;