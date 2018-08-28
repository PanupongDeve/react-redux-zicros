import React, {Component} from 'react'

class FormHorizontalLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row" style={style.box}>
                <div className="col-md-6">
                    <form className="form-horizontal">
                        {this.props.children}
                    </form>
                </div>
            </div>
        );
    }
}

const style = {
    box: {
        marginTop: '20px'
    }
}

export default FormHorizontalLayout;