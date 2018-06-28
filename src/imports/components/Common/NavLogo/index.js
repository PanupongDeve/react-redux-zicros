import React, {Component} from 'react'

export class NavLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick = () => {
        this.props.history.push('#');
    }

    render() {
        const {title} = this.props;
        return (
            <div className="logo">

                <a onClick={this.onClick} class="logo">
                    {title}
                </a>
            </div>

        );
    }
}
