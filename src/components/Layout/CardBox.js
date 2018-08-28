import React, {Component} from 'react'

class CardBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { title } = this.props;
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="card-box">
                        <h4 class="m-t-0 header-title">
                            <b>{title}</b>
                        </h4>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardBox;