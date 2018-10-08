import ActionTypes from './actionTypes';
import Router from 'next/router';
import { Streak, StreakcontrollerApi, StreakentrycontrollerApi, UsercontrollerApi } from "../../client/api";
import fetch from 'isomorphic-fetch';

const streakClient = new StreakcontrollerApi(fetch, "http://localhost:8080");
const eventClient = new StreakentrycontrollerApi(fetch, "http://localhost:8080");
const userClient = new UsercontrollerApi(fetch, "http://localhost:8080");

export const createEvent = (newEvent) => dispatch => {
    let payload = eventClient.saveUsingPOST1({entry: newEvent});
    return dispatch({ type: ActionTypes.EVENT_CREATE, payload });
};

export const fetchEvents = () => dispatch => {
    let payload = eventClient.allUsingGET1();
    return dispatch({ type: ActionTypes.EVENTS_FETCH, payload });
};

export const deleteEvent = (id: number) => dispatch => {
    eventClient.deleteUsingDELETE1({id});
    return dispatch({type: ActionTypes.EVENT_DELETE, payload: {id}});
};

export const fetchStreaks = () => dispatch => {
    const payload = streakClient.allUsingGET();
    return dispatch({ type: ActionTypes.STREAKS_FETCH, payload });
};

export const selectStreak = (streak: Streak) => dispatch => {
    return dispatch({ type: ActionTypes.STREAK_SELECT, payload: streak });
};

export const saveStreak = (streak: Streak) => dispatch => {
    function navigateToStreakList() {
        return () => Router.push('/streaks');
    }

    let payload = streakClient.saveUsingPOST({streak})
        .then(navigateToStreakList());
    return dispatch({ type: ActionTypes.STREAK_CREATE, payload });
};

export const deleteStreak = (streak: Streak) => dispatch => {
    streakClient.deleteUsingDELETE({id: streak.id})
        .then(() => dispatch(fetchStreaks()));
    return dispatch({type: ActionTypes.STREAK_DELETE, payload: streak.id});
};

export const loadUsers = () => dispatch => {
    const payload = userClient.allUsingGET2();
    return dispatch({type: ActionTypes.USERS_FETCH, payload});
};