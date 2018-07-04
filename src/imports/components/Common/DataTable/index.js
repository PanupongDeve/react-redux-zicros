import React, {Component, Fragment} from 'react'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';
import Thead from './Thead';
import Tbody from './Tbody';
import AddButton from './AddButton';
import TableLayout from './TableLayout';

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
            data: [
                {
                    id: 0,
                    engine: 'Arident',
                    borwser: 'nternet Explorer 4.0',
                    os: 'Win 95+'
                },
                {
                    id: 1,
                    engine: 'Brident',
                    borwser: 'nternet Explorer 4.0',
                    os: 'Win 95+'
                },
                {
                    id: 2,
                    engine: 'Crident',
                    borwser: 'nternet Explorer 4.0',
                    os: 'Win 95+'
                }
            ]
        }


        return (
            <Fragment>  
                <TableLayout>
                    <Thead headers={tablelist.headers} {...this.props}/>
                    <Tbody data={tablelist.data} {...this.props} />
                </TableLayout>
                <AddButton />  
            </Fragment>
        );
    }
}
