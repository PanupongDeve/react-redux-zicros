import React, {Component} from 'react';
import {connect} from 'react-redux';
import CenterLayout from '../../components/Layout/CenterLayout';
import AccountContent from '../../components/Layout/AccountContent';
import AccountPage from '../../components/Layout/AccountPage';
import {
    Header, 
    FormInput,
    BtnSubmit,
    TextMessage
} from '../../components/Common';

//import * as FontAwesome from 'react-icons/lib/fa'

class Login extends Component {
    constructor(props) {
        super(props);

    }

    onRegisterRoute = () => {
        this
            .props
            .history
            .push('/register')
    }

    onSubmit = (event) => {
        const {notify} = this.props;
        notify.success('👌 Submit Success!');

        event.preventDefault();
    }
    

    render() {
        return (
            <CenterLayout>
                <AccountPage>
                    <Header title='Log In' color='white' backgroundColor='black' {...this.props}/>
                    <AccountContent onSubmit={this.onSubmit}>
                            <FormInput 
                                grid="col-xs-12"
                                type="text"
                                name="username"
                                required={true}
                                placeholder="Username"
                                {...this.props}
                            />

                            <FormInput 
                                grid="col-xs-12"
                                type="password"
                                name="password"
                                required={true}
                                placeholder="Password"
                                {...this.props}
                            />

                            <BtnSubmit 
                                btnName="Log In"
                                btnClass="btn-danger"
                                {...this.props}
                            />  
                    </AccountContent>
                </AccountPage>

                <TextMessage 
                    msg1="Don't have an account?"
                    msg2="Sign Up"
                    onClick={this.onRegisterRoute}
                    {...this.props}
                />

            </CenterLayout>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        text: state.text,
        notify: state.notify
    }
}

export default connect(mapStateToProps)(Login);