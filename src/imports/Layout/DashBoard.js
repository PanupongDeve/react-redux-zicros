import React, {Component} from 'react';


import { 
    NavHeader
} from '@imports/components/Common'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <body>
                <NavHeader {...this.props}/>
                {this.props.children}
            </body>
        );
    }
}

export default DashBoard;