import * as React from "react";
import Link from 'next/link';

class Navbar extends React.Component<{}, {}> {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link href="/index">
                    <a className="navbar-brand" href="/index">Streakify</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/index">
                                <a className="nav-link" href="/index">Home <span
                                    className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/streaks">
                                <a className="nav-link" href="/streaks">Streaks</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/users">
                                <a className="nav-link pull-right" href="/users">Users</a>
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navbar;