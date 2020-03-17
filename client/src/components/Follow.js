import React from 'react';
import {Button} from 'semantic-ui-react'
import Interaction from '../hooks/interaction'
const Follow = ({userToFollow}) => {
    const {follow} = Interaction()
    return (
        <Button onClick={() => follow(userToFollow)}>Follow</Button>
    );
}
 
export default Follow;