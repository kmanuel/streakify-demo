import * as React from 'react';
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

class Layout extends React.Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">{this.props.children}</div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Layout;