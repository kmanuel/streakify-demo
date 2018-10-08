import * as React from "react";
import { connect } from 'react-redux';
import { createEvent, deleteEvent, fetchEvents } from '../../../redux/actions/actions';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/less/variables.less';
import 'react-big-calendar/lib/less/agenda.less';
import 'react-big-calendar/lib/less/event.less';
import 'react-big-calendar/lib/less/month.less';
import 'react-big-calendar/lib/less/reset.less';
import 'react-big-calendar/lib/less/styles.less';
import 'react-big-calendar/lib/less/time-column.less';
import 'react-big-calendar/lib/less/time-grid.less';
import 'react-big-calendar/lib/less/toolbar.less';
import { Streak, StreakEntry } from "../../../client/api";

const localizer = BigCalendar.momentLocalizer(moment);

type Props = {
    events: any[],
    selectedStreak: Streak
    createEvent: any,
    deleteEvent: any,
    fetchEvents: any
};

type State = { events: StreakEntry[] };

class Calendar extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };

        this.onSelectSlot = this.onSelectSlot.bind(this);
        this.onSelectEvent = this.onSelectEvent.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    private onSelectSlot(evt) {
        const { selectedStreak } = this.props;
        this.props.createEvent({
            title: selectedStreak ? selectedStreak.name: 'none',
            start: new Date(evt.start),
            end: new Date(evt.end)
        });
        const newEvent = Calendar.createEventFrom(evt);
        this.setState((prevState) => {
            return { events: [newEvent, ...prevState.events] }
        });
    }

    private onSelectEvent(evt) {
        this.props.deleteEvent(evt.id);
    }

    private static createEventFrom(evt) {
        return {
            id: 0,
            title: 'X',
            allDay: true,
            start: evt.start,
            end: evt.end,
        };
    }

    render() {
        const { events } = this.props;
        return (
            <div style={{ height: '500px' }}>
                <BigCalendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    events={events}
                    selectable={true}
                    onSelectSlot={this.onSelectSlot}
                    onSelectEvent={this.onSelectEvent}
                    views={{ month: true }}
                />
            </div>
        );
    }
}

function mapStateToProps({events: { events }, streaks: {selectedStreak}}) {
    return { events, selectedStreak };
}

export default connect(
    mapStateToProps,
    { createEvent, deleteEvent, fetchEvents }
)(Calendar);