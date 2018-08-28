import notify from './notifyReducer';
import catsStore from './catStoreReducer';
import LangReducer from './LangReducer';
import formReducer from './formReducer';

const reducerStore = []

reducerStore.push(notify);
reducerStore.push(catsStore);
reducerStore.push(LangReducer);
reducerStore.push(formReducer);

export default reducerStore;