import * as React from "react";
import Calendar from '../../src/components/Calendar/index';
import StreakSelector from '../../src/components/StreakSelector/index';
import Layout from "../../src/components/Layout/index";

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <div>
                    <StreakSelector />
                    <Calendar/>
                </div>
            </Layout>
        );
    }
}

export default Index;