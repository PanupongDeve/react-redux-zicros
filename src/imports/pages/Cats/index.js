import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './cats.actions';

class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchCats();
        this.props.fetchCat();
    }

    onBlankRoute = () => {
        this.props.history.push('/blank');
    }

    render() {
        console.log(this.props.catsStore);
        return (
            <div>
                <h1>Cats</h1>
                <button onClick={this.onBlankRoute}>Blank</button>
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        catsStore: state.catsStore
    }
}

export default connect(mapStateToProps, actions)(Cats);