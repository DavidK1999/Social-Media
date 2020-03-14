import React from 'react';
import Interaction from '../hooks/interaction'
import {Icon} from 'semantic-ui-react'

const Upvote = ({card}) => {
    const upvote = Interaction()

    return (
        <Icon name="heart outline" onClick={() => upvote(card)}/>
    );
}
 
export default Upvote;