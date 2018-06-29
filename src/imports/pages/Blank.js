import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashBoard from '@imports/Layout/DashBoard';
import CardBox from '@imports/Layout/CardBox';
import FormHorizontalLayout from '@imports/Layout/FormHorizontalLayout';
import { 
    FormHorizontalInput,
    FormButtonSet

} from '@imports/components/Common'

class Blank extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onBtnSuccessClick = () => {
        const { notify, form } = this.props;
        let msgError = [];
        let hasError = false;
        try {  
            //------ Form Middleware ------------------------
            if(!form.name || form.name === '') {
                msgError.push('name is required!!')
                hasError = true
            }

            if(!form.lastname || form.lastname === '') {
                msgError.push('Lastname is required!!')
                hasError = true
            }

            //--------------------------------------------------

            if(hasError) {
                hasError = false;
                throw msgError;
            } else {
                notify.success('You Click btn Submit')
            }
        } catch (errors) {
            errors.forEach(error => {
                notify.error(error)
            });   
        }    
    }

    onBtnCancelClick = () => {
        const { notify } = this.props;
        notify.error('  You Click btn Cancel')
    }

    render() {

        return (
            <DashBoard {...this.props}>
                <CardBox title="Starter Page">
                    <FormHorizontalLayout>
                        <FormHorizontalInput 
                            label="Name"
                            type="text"
                            name="name"
                            {...this.props}
                        />

                        <FormHorizontalInput 
                            label="lastName"
                            type="text"
                            name="lastname"
                            {...this.props}
                        />

                        <FormHorizontalInput 
                            label="lastName"
                            type="text"
                            name="lastname"
                            {...this.props}
                        />

                        <FormButtonSet 
                            btnSuccess="Submit"
                            onBtnSuccessClick={this.onBtnSuccessClick}
                            onBtnCancelClick={this.onBtnCancelClick}
                            btnCancel="Cancel"
                        />

                    </FormHorizontalLayout>
                </CardBox>
            </DashBoard>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notify: state.notify,
        form: state.form
    }
}

export default connect(mapStateToProps)(Blank);