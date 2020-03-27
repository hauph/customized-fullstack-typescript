export type DemoState = {
  title: string
}

export type StateType = {
  demo_state: DemoState
}

// App Data Action
export type DemoStateAction = 
    { type: typeof CHANGE_DEMO_STATE, title: string }
  // | another action
