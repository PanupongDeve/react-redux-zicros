import React, {Component} from 'react'

class ActionsButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { actions } = this.props;
        return (
            <a style={style.font} href="#" className={`on-default`}>
                <i className={`fa fa-${actions}`}></i>
            </a>
        );
    }
}

const style = {
    font: {
        fontSize: '27px'
    }
}


export default ActionsButtons;