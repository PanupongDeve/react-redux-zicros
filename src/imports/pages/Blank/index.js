import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashBoard from '@imports/Layout/DashBoard';
import CardBox from '@imports/Layout/CardBox';
import FormHorizontalLayout from '@imports/Layout/FormHorizontalLayout';
import { 
    FormHorizontalInput,
    FormButtonSet

} from '@imports/components/Common'
import * as Utils from '@imports/utils';
import BlankText from './blank.text';

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

    onCatsRoute = () => {
        this.props.history.push('/cats');
    }

    render() {
        const blankText = Utils.checkLanguage(BlankText);
        return (
            <DashBoard {...this.props}>
                <CardBox title={blankText.title}>
                    <FormHorizontalLayout>
                        <FormHorizontalInput 
                            label={blankText.name}
                            type="text"
                            name={blankText.name}
                            {...this.props}
                        />

                        <FormHorizontalInput 
                            label={blankText.lastName}
                            type="text"
                            name={blankText.lastName}
                            {...this.props}
                        />


                        <FormButtonSet 
                            btnSuccess={blankText.submit}
                            onBtnSuccessClick={this.onBtnSuccessClick}
                            onBtnCancelClick={this.onBtnCancelClick}
                            btnCancel={blankText.cancel}
                        />

                        

                    </FormHorizontalLayout>
                </CardBox>
                <button onClick={this.onCatsRoute}>Cats</button>
            </DashBoard>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notify: state.notify,
        form: state.form,
    }
}

export default connect(mapStateToProps)(Blank);