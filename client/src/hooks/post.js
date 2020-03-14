import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {post} from '../redux/actions/card'


const Post = () => {
    const dispatch = useDispatch()
    let [inputs, setInputs] = useState({})
   
    const handleInputChange = e => {
        e.preventDefault()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

   const handleSubmit = (e, route) => {
       e.preventDefault()
       dispatch(post(inputs, route))
    }

    return {handleInputChange, handleSubmit}
}
 
export default Post;