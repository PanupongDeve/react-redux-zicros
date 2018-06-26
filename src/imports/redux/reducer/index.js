import { combineReducers } from 'redux';
import formReducer from './formReducer';
import languageReducer from './languageReducer';
import exampleStore from './exampleReducer';
import textReducer from './TextReducer';
const rootReducer = combineReducers({
    lang: languageReducer,
    form: formReducer,
    text: textReducer,
    exampleStore 
});

export default rootReducer;

