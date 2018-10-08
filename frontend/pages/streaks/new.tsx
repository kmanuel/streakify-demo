import * as React from "react";
import Layout from "../../src/components/Layout/index";
import { connect } from "react-redux";
import { saveStreak } from "../../redux/actions/actions";
import { Streak } from "../../client/api";

class StreakCreate extends React.Component<{saveStreak: any}, {name: string, description: string}> {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    private onNameChange(evt) {
        this.setState({name: evt.target.value});
    }

    private onDescriptionChange(evt) {
        this.setState({description: evt.target.value});
    }

    private onSave(evt) {
        evt.preventDefault();

        const { name, description } = this.state;
        const streak: Streak = { name, description };

        this.props.saveStreak(streak);
    }

    render() {
        return (
            <Layout>
                <div>
                    <h1>Create Streak</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Name"
                                value={this.state.name}
                                onChange={this.onNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input className="form-control" id="description"
                                   aria-describedby="emailHelp" placeholder="Description"
                                   value={this.state.description}
                                   onChange={this.onDescriptionChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                                onClick={this.onSave}>Save
                        </button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default connect(null, {saveStreak})(StreakCreate);