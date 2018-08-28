import React, {Component} from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { title, color, backgroundColor } = this.props;
        return (
            <div className="text-center account-logo-box" style={{ backgroundColor }}>
                <h2
                    className="text-uppercase"
                    style={{
                    color
                    
                }}>
                    {title}
                </h2>
            </div>
        );
    }
}

