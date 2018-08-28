import React, {Component, Fragment} from 'react';


import { 
    NavHeader,
    Wrapper,
    PageTitle
} from '../Common'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <NavHeader {...this.props}/>
                    <Wrapper>
                        <PageTitle title="DashBoard" />
                        {this.props.children}
                    </Wrapper>
            </Fragment>
        );
    }
}

export default DashBoard;