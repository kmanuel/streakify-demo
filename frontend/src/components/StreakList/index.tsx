import * as React from 'react';
import { connect } from 'react-redux';
import { deleteStreak, fetchStreaks } from "../../../redux/actions/actions";
import AppState from "../../../redux/appState";
import { Streak } from "../../../client/api";

type Props = {
    streaks: Streak[],
    fetchStreaks: any,
    deleteStreak: any
};

class StreakList extends React.Component<Props, {}> {

    componentDidMount() {
        this.props.fetchStreaks();
    }

    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {this.getStreakItems(this.props.streaks)}
                </ul>
            </div>
        )
    }

    private getStreakItems = (streaks: Streak[]) => streaks.map(this.toStreakItem);

    private toStreakItem = (s: Streak) => (
        <li key={s.id} className="list-group-item">
            {s.name} = {s.description}
            <button className="btn btn-danger float-right" onClick={() => this.onDelete(s)}>Delete</button>
        </li>
    );

    private onDelete = (streak: Streak) => this.props.deleteStreak(streak);
}

function mapStateToProps(state: AppState) {
    return {
        streaks: state.streaks.streaks
    };
}

export default connect(
    mapStateToProps,
    { fetchStreaks, deleteStreak }
)(StreakList);