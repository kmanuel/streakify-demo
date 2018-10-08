import types from "../actions/actionTypes";
import { StreakEntry } from "../../client/api";
import { defaultEventState } from "../appState";

export type EventState = {
    events: StreakEntry[],
};

export default (state: EventState = defaultEventState, action): EventState => {
    switch (action.type) {
        case types.EVENT_CREATE:
            return {
                ...state,
                events: [action.payload, ...state.events]
            };
        case types.EVENTS_FETCH:
            return {
                ...state,
                events: action.payload.map(toEvent)
            };
        case types.EVENT_DELETE:
            const { id } = action.payload;
            return {
                ...state,
                events: [...state.events.filter(e => e.id !== id)]
            };
        default:
            return state;
    }
};

function toEvent(eventJson): StreakEntry {
    return {
        ...eventJson,
        start: new Date(eventJson.start),
        end: new Date(eventJson.end)
    };
}
