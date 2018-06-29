import React, {Component, Fragment} from "react";
import Loader from '@imports/components/Loader';
import {ToastContainer} from 'react-toastify';
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
            const data = {
                size: 200
            };

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
