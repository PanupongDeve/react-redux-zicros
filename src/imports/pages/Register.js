import React, {Component} from 'react';
import {connect} from 'react-redux';
import CenterLayout from '@imports/Layout/CenterLayout';
import AccountContent from '@imports/Layout/AccountContent';
import AccountPage from '@imports/Layout/AccountPage';
import {
    Header, 
    FormInput,
    BtnSubmit,
    TextMessage,
    CheckboxAccept
} from '@imports/components/Common';

//import * as FontAwesome from 'react-icons/lib/fa'

class Register extends Component {
    constructor(props) {
        super(props);

    }

    onLoginRoute = () => {
        this
            .props
            .history
            .push('/login')
    }

    onSubmit = (event) => {
        alert('Submit Success');

        event.preventDefault();
    }

    render() {
        return (
            <CenterLayout>
                <AccountPage>
                    <Header title='Register' color='white' backgroundColor='black' {...this.props}/>
                    <AccountContent onSubmit={this.onSubmit}>
                            <FormInput 
                                grid="col-xs-12"
                                type="email"
                                required={true}
                                placeholder="Email"
                                {...this.props}
                            />

                            <FormInput 
                                grid="col-xs-12"
                                type="text"
                                required={true}
                                placeholder="Username"
                                {...this.props}
                            />

                            <FormInput 
                                grid="col-xs-12"
                                type="password"
                                required={true}
                                placeholder="Password"
                                {...this.props}
                            />

                            <CheckboxAccept 
                                href="https://github.com"
                                {...this.props}
                            />

                            <BtnSubmit 
                                btnName="Register"
                                btnClass="btn-danger"
                                {...this.props}
                            />  
                    </AccountContent>
                </AccountPage>

                <TextMessage 
                    msg1="Already have account?"
                    msg2="Sign in"
                    onClick={this.onLoginRoute}
                    {...this.props}
                />

            </CenterLayout>
        );
    }
}


const mapStateToProps = (state) => {
    return {text: state.text}
}

export default connect(mapStateToProps)(Register);