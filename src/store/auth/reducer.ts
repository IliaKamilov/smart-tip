import { Reducer } from "redux";
import { AuthActions, AuthState, SET_AUTH, UNSET_AUTH } from "./types";

const initialState: AuthState = {
    loading: true
}

const authReducer: Reducer<AuthState, AuthActions> = (
    state = initialState,
    action
): AuthState => {

    switch (action.type) {
        case SET_AUTH:
            return state = action.payload
        case UNSET_AUTH:
            return state = { loading: false }
        default:
            return state
    }
}

export default authReducer