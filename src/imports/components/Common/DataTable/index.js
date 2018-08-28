import React, {Component, Fragment} from 'react'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import Thead from './Thead';
import Tbody from './Tbody';
import AddButton from './AddButton';
import TableLayout from './TableLayout';
import { generateMockData } from './mockData';

export class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.common();

    }

    common = () => {
        const editTable = this.editTable();
        editTable.initialize();
    }

    editTable = () => {
        var EditableTable = {

            options: {
                addButton: '#addToTable',
                table: '#datatable-editable',
                dialog: {
                    wrapper: '#dialog',
                    cancelButton: '#dialogCancel',
                    confirmButton: '#dialogConfirm'
                }
            },

            initialize: function () {

                this
                    .setVars()
                    .build();
                    
            },

            setVars: function () {
                this.$table = $(this.options.table);
                this.$addButton = $(this.options.addButton);

                // dialog
                this.dialog = {};
                this.dialog.$wrapper = $(this.options.dialog.wrapper);
                this.dialog.$cancel = $(this.options.dialog.cancelButton);
                this.dialog.$confirm = $(this.options.dialog.confirmButton);

                return this;
            },

            build: function () {
                this.datatable = this
                    .$table
                    .DataTable({
                        aoColumns: [
                            null,
                            null,
                            null,
                            null, {
                                "bSortable": false
                            }
                        ]
                    });

                window.dt = this.datatable;

                return this;
            },
  

        };

        return EditableTable;
    }

    render() {
        const tablelist = {
            headers: ['ID', 'Rendering engine', 'Browser', 'Platforms(s)', 'Actions'],
            data: generateMockData()
        }


        return (
            <Fragment>  
                <TableLayout>
                    <Thead headers={tablelist.headers} {...this.props}/>
                    <Tbody data={tablelist.data} {...this.props} />
                </TableLayout>
                <AddButton {...this.props}/>  
            </Fragment>
        );
    }
}
