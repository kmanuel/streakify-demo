import * as React from "react";
import Link from 'next/link';
import Layout from "../../src/components/Layout/index";
import StreakList from "../../src/components/StreakList/index";

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Streaks</h1>
                    <Link href="/streaks/new">
                        <button>Create a new Streak</button>
                    </Link>
                    <StreakList />
                </div>
            </Layout>
        );
    }
}

export default Index;