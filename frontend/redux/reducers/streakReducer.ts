import types from "../actions/actionTypes";
import { Streak } from "../../client/api";
import { defaultStreakState } from "../appState";

export type StreakState = {
    selectedStreak: Streak,
    streaks: Streak[]
};

export default (state: StreakState = defaultStreakState , action): StreakState => {
    switch (action.type) {
        case types.STREAKS_FETCH:
            return {
                ...state,
                selectedStreak: (state.selectedStreak) ? state.selectedStreak : action.payload[0],
                streaks: action.payload.map(s => s)
            };
        case types.STREAK_SELECT:
            return {
                ...state,
                selectedStreak: action.payload
            };
        default:
            return state
    }
};