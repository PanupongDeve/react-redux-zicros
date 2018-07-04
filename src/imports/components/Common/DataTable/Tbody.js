import React, {Component} from 'react';
import TR from './TR';

class Tbody extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderTR = () => {
        const { data } = this.props;
        return data.map((list, index) => {
            return <TR key={index} td={list} {...this.props}/>
        })
    }

    render() {
        return (
            <tbody>
                {this.renderTR()}
            </tbody>
        );
    }
}


export default Tbody;