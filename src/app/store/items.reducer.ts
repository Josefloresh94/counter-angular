import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, { add }) => state + add),
    on(decrement, (state, { rest }) => state - rest),
    on(reset, (state, {cero}) => state = cero),
);