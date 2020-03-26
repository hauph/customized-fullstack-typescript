import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { DemoStateAction } from './demo_state';

import type {StateType} from './demo_state.d';

// APP ACTION TYPE
export type Action = DemoStateAction; // | AnotherAction

// APP STATE TYPE
export type State = StateType;

// APP STORE
export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;

export type GetState = () => State;

// APP THUNK ACTION TYPE
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;



