import { EventState } from "./reducers/eventReducer";
import { StreakState } from "./reducers/streakReducer";
import { UserState } from "./reducers/userReducer";

export const defaultUserState: UserState = {
    users: []
};

export const defaultStreakState: StreakState = {
    selectedStreak: undefined,
    streaks: []
};

export const defaultEventState: EventState = {
    events: []
};

export const defaultState: AppState = {
    users: defaultUserState,
    streaks: defaultStreakState,
    events: defaultEventState
};

export default interface AppState {
    events: EventState,
    streaks: StreakState,
    users: UserState
};