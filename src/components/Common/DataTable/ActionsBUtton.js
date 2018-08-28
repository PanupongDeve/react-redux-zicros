import React, {Component} from 'react'

class ActionsButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick = () => {
        const { callback } = this.props;
        callback ? callback() : console.log('callback is not define');
    }

    render() {
        const { actions } = this.props;
        return (
            <a onClick={this.onClick} style={style.font} className={`on-default`}>
                <i className={`fa fa-${actions}`}></i>
            </a>
        );
    }
}

const style = {
    font: {
        fontSize: '27px',
        cursor: 'pointer'
    },
}


export default ActionsButtons;