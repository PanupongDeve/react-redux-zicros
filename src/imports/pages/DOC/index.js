/*
import * as tools from '../../utils';
import * as CRUD from '../../redux/actions/CRUD';

------------------ การใช้งาน method ต่างๆ -----------
const callback = () => { 
    ...Todo Anything
};

const data = {
    ...Object Anything
}

this.props.getApi(tools.requestCustomers(callback));

this.props.getApi(tools.requestCustomerById(id, callback));

this.props.postApi(tools.requestPostCustomer(data, callback));

this.props.patchApi(tools.requestPatchCustomer(id, data, callback));

this.props.deleteApi(tools.requestDeleteCustomer(id, callback));

this.props.clearStoreApi(tools.clearStoreCustomers());


----------------------------------------------------

// ข้อมูลจะเก็บใน customerStore สิ่งที่เก็บสามารถดูได้ใน CustomersReducer

const mapStateToProps = ({ customersStore }) => {
  return { customersStore }; 
}

connect(mapStateToProps, CRUD); //เรียกใช้ action
*/