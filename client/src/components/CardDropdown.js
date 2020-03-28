import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import Delete from '../hooks/delete'

const CardDropdown = ({post}) => {
    const deleteCard = Delete()
    return (
        <Dropdown icon="chevron down" direction="left">
            <Dropdown.Menu>
            <Dropdown.Item icon='trash alternate outline' text='Delete' onClick={() => deleteCard(post)} />
            </Dropdown.Menu>
        </Dropdown>
    );
}
 
export default CardDropdown;