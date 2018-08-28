import React, {Component} from 'react'

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onBack = (event) => {
        this.props.history.goBack();

        event.preventDefault();
    }

    render() {
        return (
            <section>
                <div className="container-alt">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="wrapper-page">
                                <img src="assets/images/animat-search-color.gif" alt="gif" height={120}/>
                                <h2 className="text-uppercase text-danger">Page Not Found</h2>
                                <a
                                    className="btn btn-success waves-effect waves-light m-t-20"
                                    onClick={this.onBack} >
                                    Back</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFound;