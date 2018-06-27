import React, {Component} from 'react'

class Submenu2List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onRouteTo = (url) => {
        return () => this.props.history.push(url);
    }

    render() {
        const { title2, url} = this.props;
        return (
            <li>
                <a onClick={this.onRouteTo(url)}>{title2}</a>
            </li>
        );
    }
}

export default Submenu2List;