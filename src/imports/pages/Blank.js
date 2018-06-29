import React, {Component} from 'react';
import DashBoard from '@imports/Layout/DashBoard';
import CardBox from '@imports/Layout/CardBox';

class Blank extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        
        return (
            <DashBoard {...this.props}>
                <CardBox title="Starter Page">
                แตก1
                </CardBox>
            </DashBoard>
        );
    }
}

export default Blank;