import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0
}

export const incrementCounter = createAction('[App] Increment counter');

export const decrementCounter = createAction('[App] Decrement counter');

export const multiplyCounter = createAction('[App] Multiply counter');

export const appReducer = createReducer(
  appInitialState,
  on(incrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  }),
  on(multiplyCounter, (state) => {
    state = {
      ...state,
      counter: state.counter * 2
    }
    return state;
  })
)

