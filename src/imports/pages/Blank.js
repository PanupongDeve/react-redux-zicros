import React, {Component} from 'react';
import DashBoard from '@imports/Layout/DashBoard';
import CardBox from '@imports/Layout/CardBox';
import FormHorizontalLayout from '@imports/Layout/FormHorizontalLayout';
import { FormHorizontalInput } from '@imports/components/Common/FormHorizontalInput'

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
                        />
                    

                    </FormHorizontalLayout>
                </CardBox>
            </DashBoard>
        );
    }
}

export default Blank;