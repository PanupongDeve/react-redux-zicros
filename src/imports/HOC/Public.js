import React, {Component} from "react";
import Loader from '@imports/components/Loader';

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
            }, 2000)
        }

        render() {
            const data = {
                size: 200
            };

            const {loading} = this.state;
            if (loading) {
                return (<Loader {...data}/>);
            }
            return (<ComposedComponent {...this.props}/>);
        }
    }

    return Public;
}
