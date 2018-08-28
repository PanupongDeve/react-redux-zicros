import React, {Component, Fragment} from "react";
import Loader from '../Loader';
import ToastContainer from '../ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

export default function (ComposedComponent) {
    class Public extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
        }

        componentDidMount() {
            
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        }

        render() {

            const {loading} = this.state;
            if (loading) {
                return <Loader />
            }
            return (
                <Fragment>
                    <ComposedComponent {...this.props}/>
                    <ToastContainer/>
                </Fragment>
            );
        }
    }

    return Public;
}
