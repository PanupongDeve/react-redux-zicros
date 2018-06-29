import React, {Component} from 'react';
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
                        
                        <FormButtonSet 
                            btnSuccess="Submit"
                            btnCancel="Cancel"
                        />

                    </FormHorizontalLayout>
                </CardBox>
            </DashBoard>
        );
    }
}

export default Blank;