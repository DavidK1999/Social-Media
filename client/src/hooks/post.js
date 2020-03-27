import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {post} from '../redux/actions/card'


const Post = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let [inputs, setInputs] = useState({})
   
    const handleInputChange = e => {
        let regex = /[#]\S[a-zA-Z]*/g;
        const duplicateText = e.currentTarget.value;
        const tagged = duplicateText.match(regex);
        let strippedTags = tagged && tagged.map(tag => tag.substring(1));
        inputs.tags = strippedTags;
        e.preventDefault()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

   const handleSubmit = (e, route) => {
       e.preventDefault()
       dispatch(post(inputs, route))
       history.push('/home')
    }

    return {handleInputChange, handleSubmit}
}
 
export default Post;