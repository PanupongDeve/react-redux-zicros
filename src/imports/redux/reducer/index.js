import { combineReducers } from 'redux';
import formReducer from './formReducer';
import languageReducer from './languageReducer';
import exampleStore from './exampleReducer';
import textReducer from './TextReducer';
import notifyReducer from './notifyReducer';

const rootReducer = combineReducers({
    lang: languageReducer,
    form: formReducer,
    text: textReducer,
    notify: notifyReducer,
    exampleStore 
});

export default rootReducer;

