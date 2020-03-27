import { combineReducers } from 'redux';
import demo_state from './demo_state';
import type {StateType} from '../../types/demo_state'

export default combineReducers({
	demo_state: StateType
	//another_state_prop,
})

