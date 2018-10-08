import types from "../actions/actionTypes";
import { User } from "../../client/api";
import { defaultUserState } from "../appState";

export type UserState = {
    users: User[]
};

export default (state = defaultUserState, action): UserState => {
    switch (action.type) {
        case types.USERS_FETCH:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};