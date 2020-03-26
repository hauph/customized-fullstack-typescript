import {initState} from '../initState';
import type { Action } from '../types'
import type {StateType} from '../type/demo_state.d'

const demo_state = (state: StateType = initState.demo_state, action: Action): StateType => {
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