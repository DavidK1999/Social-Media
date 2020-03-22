import React from 'react';
import {Link} from 'react-router-dom'
import reactStringReplace from 'react-string-replace'

const Tag = ({card}) => {
    return (
        <p>
        {reactStringReplace(card.body, /(#\S[a-zA-Z]*)/gi, (match, i) => <Link to={`/tagged/${match.substring(1)}`} key={i} className="tag">{match}</Link>)}</p>
    );
}
 
export default Tag;