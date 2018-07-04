import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashBoard from '@imports/Layout/DashBoard';
import CardBox from '@imports/Layout/CardBox';
import { DataTable } from '@imports/components/Common';


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

    onAddButtonClick = () => {
        const { notify } = this.props;
        notify.success(' You click Add Button Success')
    }

    onEditButtonClick = () => {
        const { notify } = this.props;
        notify.warning(' You click Edit Button Success')
    }

    onDeleteButtonClick = () => {
        const { notify } = this.props;
        notify.error(' You click Delete Button Success')
    }

    render() {
        return (
            <DashBoard {...this.props}>
                <CardBox title={'Table Example'}>
                   <DataTable
                        onAddButtonClick={this.onAddButtonClick}
                        onEditButtonClick={this.onEditButtonClick}
                        onDeleteButtonClick={this.onDeleteButtonClick}
                        {...this.props}
                    />
                </CardBox>
            </DashBoard>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notify: state.notify,
        form: state.form,
        text: state.text
    }
}

export default connect(mapStateToProps)(Blank);