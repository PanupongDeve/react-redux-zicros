import React, {Component} from 'react'

class Thead extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderHeader = () => {
        const { headers } = this.props
        return headers.map((header, index) => {
            return <th key={index}>{header}</th>
        });
    }
 
    render() {
        return (
            <thead>
                <tr>
                    {this.renderHeader()}
                </tr>
            </thead>
        );
    }
}

export default Thead;