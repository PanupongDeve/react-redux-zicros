import React, {Component} from 'react'
import _ from 'lodash';

class TR extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderTD = () => {
        let results = [];
        const { td } = this.props;
        _.forIn(td, function(value, key) {
            results.push(value);
          });
        
        return results.map((result, index) => {
            return <td key={index}>{result}</td>;
        })
    }

    render() {
        this.renderTD();
        return (
            <tr className="gradeX">
                {this.renderTD()}
                <td class="actions">
                    <a style={style.font} href="#" className="on-default edit-row">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a style={style.font} href="#" className="on-default remove-row">
                        <i class="fa fa-trash-o"></i>
                    </a>
                </td>
            </tr>
        );
    }
}

const style = {
    font: {
        fontSize: '27px'
    }
}


export default TR;