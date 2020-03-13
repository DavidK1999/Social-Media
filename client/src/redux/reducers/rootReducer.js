import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import card from './card'
import nav from './nav'

export default combineReducers({user, card, auth, nav})