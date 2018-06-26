import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tools from '@imports/utils';
import * as actions from '@imports/redux/actions';
import { ExampleText } from '@imports/Text';

class Example extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {
        this.props.clearStoreApi();
        this.props.handleClearForm();

    }

    render() {
        const { exampleStore } = this.props;
        if(exampleStore.loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>Writing...</div>
        );
    };
}

function mapStateToProps({ exampleStore }) {
    return {
        exampleStore
    };
}

export default connect(mapStateToProps, actions)(Example); 