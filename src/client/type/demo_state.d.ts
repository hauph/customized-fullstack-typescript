export interface DemoState {
  title: string
}

export interface StateType {
  demo_state: DemoState
}

// App Data Action
export type DemoStateAction = 
    { type: typeof CHANGE_DEMO_STATE, title: string }
  // | another action
