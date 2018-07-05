import { combineReducers } from 'redux';
import formReducer from './formReducer';
import languageReducer from './languageReducer';
import notifyReducer from './notifyReducer';

const rootReducer = combineReducers({
    lang: languageReducer,
    form: formReducer,
    notify: notifyReducer,
});

export default rootReducer;

