import React, {Component} from 'react';
import DashBoard from '@imports/Layout/DashBoard';

class Blank extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <DashBoard {...this.props}>
                แตก1
            </DashBoard>
        );
    }
}

export default Blank;