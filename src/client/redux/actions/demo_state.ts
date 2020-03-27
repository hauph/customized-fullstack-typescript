import type { DemoStateAction } from '../../types/demo_state'
//import type { ThunkAction } from '../types'

export const changeDemoState = (title: string): DemoStateAction => {
    return {
        type: "CHANGE_DEMO_STATE",
        title: "My name is How",
    }
}