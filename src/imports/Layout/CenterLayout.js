import React, {Component} from 'react'
import './style.css';

class CenterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section>
                <div id="centerLayout" className="container-alt animated zoomIn">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="wrapper-page">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CenterLayout;