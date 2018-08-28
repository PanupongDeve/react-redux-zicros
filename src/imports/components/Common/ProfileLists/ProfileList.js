import React, {Component} from 'react'

export class ProfileList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onRouteTo = (url) => {
        return () => this.props.history.push(url)
    }

    render() {
        const {url, name, Icon} = this.props;
        return (
            <li>
                <a onClick={this.onRouteTo(url)}>
                    <Icon size={32} style={style.mr5} />
                    {name}
                </a>
            </li>
        );
    }
}

const style = {
    mr5: {
        marginRight: "5px"
    }
}

