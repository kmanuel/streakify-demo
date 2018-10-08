import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreaks, selectStreak } from '../../../redux/actions/actions';
import AppState from "../../../redux/appState";
import { Streak } from "../../../client/api";

type Props = {
    selectedStreak: Streak,
    streaks: Streak[],
    selectStreak: any,
    fetchStreaks: any,
};

class StreakSelector extends Component<Props, {}> {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchStreaks();
    }

    private onSelect(evt) {
        const selectedStreak = this.props.streaks.filter(s => s.name === evt.target.value)[0];
        this.props.selectStreak(selectedStreak);
    }

    render() {
        return (
            <div className="container">
                <div className="form-group row">
                    <select name="streak" id="streak"
                            className="form-control"
                            onChange={this.onSelect}
                            value={this.props.selectedStreak ? this.props.selectedStreak.name : 'none'}>
                        {this.props.streaks.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ streaks: { selectedStreak, streaks } }: AppState) {
    return {
        selectedStreak,
        streaks
    };
}

export default connect(
    mapStateToProps,
    { fetchStreaks, selectStreak }
)(StreakSelector);