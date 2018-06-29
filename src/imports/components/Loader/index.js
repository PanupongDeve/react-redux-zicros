import React, {Component} from 'react';
import './style.css';

class Loader extends React.Component {

    render() {

        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="spinner-wrapper">
                            <div className="rotator">
                                <div className="inner-spin"/>
                                <div className="inner-spin"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader;
