import React, {Component} from 'react'
import _ from 'lodash';
import ActionsButton from './ActionsBUtton';

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
        const { onEditButtonClick, onDeleteButtonClick } = this.props;
        return (
            <tr className="gradeX">
                {this.renderTD()}
                <td class="actions">
                    <ActionsButton 
                        callback={onEditButtonClick}
                        actions="pencil"  
                        {...this.props}  
                    />
                    <ActionsButton 
                        callback={onDeleteButtonClick}
                        actions="trash-o"  
                        {...this.props}  
                    />
                </td>
            </tr>
        );
    }
}


export default TR;