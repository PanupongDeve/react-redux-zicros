import React, {Component} from 'react';
import './style.css';

export class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div class="wrapper">
                <div class="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

