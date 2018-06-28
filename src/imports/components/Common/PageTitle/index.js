import React, {Component} from 'react'

export class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { title } = this.props;
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="page-title-box">
                        <h4 class="page-title">{title}</h4>
                    </div>
                </div>
            </div>
        );
    }
}
