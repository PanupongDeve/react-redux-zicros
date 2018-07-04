import React, {Component} from 'react'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs';

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
                    .build()
                    .events();
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
                            null, {
                                "bSortable": false
                            }
                        ]
                    });

                window.dt = this.datatable;

                return this;
            },

            events: function () {
                var _self = this;

                this
                    .$table
                    .on('click', 'a.save-row', function (e) {
                        e.preventDefault();

                        _self.rowSave($(this).closest('tr'));
                    })
                    .on('click', 'a.cancel-row', function (e) {
                        e.preventDefault();

                        _self.rowCancel($(this).closest('tr'));
                    })
                    .on('click', 'a.edit-row', function (e) {
                        e.preventDefault();
                        console.log(e);
                        _self.rowEdit($(this).closest('tr'));
                    })
                    .on('click', 'a.remove-row', function (e) {
                        e.preventDefault();

                        var $row = $(this).closest('tr');

                    });

                this
                    .$addButton
                    .on('click', function (e) {
                        e.preventDefault();

                        _self.rowAdd();
                    });

                this
                    .dialog
                    .$cancel
                    .on('click', function (e) {
                        e.preventDefault();
                        $
                            .magnificPopup
                            .close();
                    });

                return this;
            },

            // =============================================================================
            // ============= ROW FUNCTIONS
            // ==============================================================================
            // ============
            rowAdd: function () {
                this
                    .$addButton
                    .attr({'disabled': 'disabled'});

                var actions,
                    data,
                    $row;

                actions = ['<a href="#" class="hidden on-editing save-row"><i class="fa fa-save"></i></a>', '<a href="#" class="hidden on-editing cancel-row"><i class="fa fa-times"></i></a>', '<a href="#" class="on-default edit-row"><i class="fa fa-pencil"></i></a>', '<a href="#" class="on-default remove-row"><i class="fa fa-trash-o"></i></a>'].join(' ');

                data = this
                    .datatable
                    .row
                    .add(['', '', '', actions]);
                $row = this
                    .datatable
                    .row(data[0])
                    .nodes()
                    .to$();

                $row
                    .addClass('adding')
                    .find('td:last')
                    .addClass('actions');

                this.rowEdit($row);

                this
                    .datatable
                    .order([0, 'asc'])
                    .draw(); // always show fields
            },

            rowCancel: function ($row) {
                var _self = this,
                    $actions,
                    i,
                    data;

                if ($row.hasClass('adding')) {
                    this.rowRemove($row);
                } else {

                    data = this
                        .datatable
                        .row($row.get(0))
                        .data();
                    this
                        .datatable
                        .row($row.get(0))
                        .data(data);

                    $actions = $row.find('td.actions');
                    if ($actions.get(0)) {
                        this.rowSetActionsDefault($row);
                    }

                    this
                        .datatable
                        .draw();
                }
            },

            rowEdit: function ($row) {
                var _self = this,
                    data;

                data = this
                    .datatable
                    .row($row.get(0))
                    .data();

                $row
                    .children('td')
                    .each(function (i) {
                        var $this = $(this);

                        if ($this.hasClass('actions')) {
                            _self.rowSetActionsEditing($row);
                        } else {
                            $this.html('<input type="text" class="form-control input-block" value="' + data[i] + '"/>');
                        }
                    });
            },

            rowSave: function ($row) {
                var _self = this,
                    $actions,
                    values = [];

                if ($row.hasClass('adding')) {
                    this
                        .$addButton
                        .removeAttr('disabled');
                    $row.removeClass('adding');
                }

                values = $row
                    .find('td')
                    .map(function () {
                        var $this = $(this);

                        if ($this.hasClass('actions')) {
                            _self.rowSetActionsDefault($row);
                            return _self
                                .datatable
                                .cell(this)
                                .data();
                        } else {
                            return $.trim($this.find('input').val());
                        }
                    });
                console.log('see value', values);
                this
                    .datatable
                    .row($row.get(0))
                    .data(values);

                $actions = $row.find('td.actions');
                if ($actions.get(0)) {
                    this.rowSetActionsDefault($row);
                }

                this
                    .datatable
                    .draw();
            },

            rowRemove: function ($row) {
                if ($row.hasClass('adding')) {
                    this
                        .$addButton
                        .removeAttr('disabled');
                }

                this
                    .datatable
                    .row($row.get(0))
                    .remove()
                    .draw();
            },

            rowSetActionsEditing: function ($row) {
                $row
                    .find('.on-editing')
                    .removeClass('hidden');
                $row
                    .find('.on-default')
                    .addClass('hidden');
            },

            rowSetActionsDefault: function ($row) {
                $row
                    .find('.on-editing')
                    .addClass('hidden');
                $row
                    .find('.on-default')
                    .removeClass('hidden');
            }

        };

        return EditableTable;
    }

    mainTable = () => {
        $('#mainTable')
            .editableTableWidget()
            .numericInputExample()
            .find('td:first')
            .focus();
    }

    render() {
        return (
            <div>
                
                <div>
                    <table
                        className="table table-striped add-edit-table table-bordered"
                        id="datatable-editable">
                        <thead>
                            <tr>
                                <th>Rendering engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="gradeX">
                                <td>Trident</td>
                                <td>Internet Explorer 4.0</td>
                                <td>Win 95+</td>
                                <td class="actions">
                                    <a href="#" className="hidden on-editing save-row">
                                        <i class="fa fa-save"></i>
                                    </a>
                                    <a href="#" className="hidden on-editing cancel-row">
                                        <i class="fa fa-times"></i>
                                    </a>
                                    <a href="#" className="on-default edit-row">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" className="on-default remove-row">
                                        <i class="fa fa-trash-o"></i>
                                    </a>
                                </td>
                            </tr>

                            <tr className="gradeX">
                                <td>Arident</td>
                                <td>Internet Explorer 4.0</td>
                                <td>Win 95+</td>
                                <td class="actions">
                                    <a href="#" className="hidden on-editing save-row">
                                        <i class="fa fa-save"></i>
                                    </a>
                                    <a href="#" className="hidden on-editing cancel-row">
                                        <i class="fa fa-times"></i>
                                    </a>
                                    <a href="#" className="on-default edit-row">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" className="on-default remove-row">
                                        <i class="fa fa-trash-o"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="m-b-30">
                            <button id="addToTable" className="btn btn-success waves-effect waves-light">Add
                                <i className="mdi mdi-plus-circle-outline"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
