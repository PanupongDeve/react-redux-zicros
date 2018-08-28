import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../model/Redux/actions/LangActions';
import { FaLanguage } from 'react-icons/lib/fa';
import languageHelper from '../../../model/languageHelper';
import LangBarText from './langBar.text';


class LangBarWithOutRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    ChangEngToTH = () => {
        this.props.selectLang('th')
    }

    ChangTHToEng = () => {
        this.props.selectLang('en')
    }

    render() {
        const LangText = languageHelper.switchLang(LangBarText);
        const { title, thai, eng} = LangText;
        return (
            <li className="dropdown navbar-c-items">
                <a href="#" className="right-menu-item dropdown-toggle" data-toggle="dropdown">
                    <FaLanguage style={style.icon} />
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list">
                    <li className="text-center">
                        <h5>{title}</h5>
                    </li>
                    <li>
                        <a style={style.hand} onClick={this.ChangEngToTH} className="user-list-item">
                            <div className="avatar">
                                <img src="https://lipis.github.io/flag-icon-css/flags/4x3/th.svg" alt/>
                            </div>
                            <div className="user-desc">
                                <span className="name">{thai}</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a style={style.hand} onClick={this.ChangTHToEng} className="user-list-item">
                            <div className="avatar">
                                <img src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" alt/>
                            </div>
                            <div className="user-desc">
                                <span className="name">{eng}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}


const style = {
   icon: {
       color: 'white'
   },
   hand: {
    cursor: 'pointer'
   }
}

export const LangBar =  connect(null, actions)(LangBarWithOutRedux);
