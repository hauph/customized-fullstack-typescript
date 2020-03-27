import {initState} from '../initState';
import type { Action } from '../../types'
import type {StateType, DemoState} from '../../types/demo_state'

const demo_state = (state = initState.demo_state, action) => {
    switch (action.type) {
        case "CHANGE_DEMO_STATE": 
            return {
                ...state,
                title: action.title
            }
        default:
            return state
    }
}

export default demo_state;