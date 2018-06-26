import React, {Component} from 'react'

export class TextMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {msg1, msg2, onClick} = this.props;
        return (
            <div className="row m-t-50">
                <div className="col-sm-12 text-center">
                    <p className="text-muted">{msg1}
                        <a
                            onClick={onClick}
                            className="text-primary m-l-5"
                            style={styles.register}>
                            <b>{msg2}</b>
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    register: {
        cursor: 'pointer'
    }
}
