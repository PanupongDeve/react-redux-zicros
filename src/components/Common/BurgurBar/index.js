import React, {Component} from 'react'

export class BurgurBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="menu-item">
                {/* Mobile menu toggle*/}
                <a className="navbar-toggle">
                    <div className="lines">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </a>
                {/* End mobile menu toggle*/}
            </div>
        );
    }
}
