import { combineReducers } from 'redux';
import formReducer from './formReducer';
import languageReducer from './languageReducer';
import notifyReducer from './notifyReducer';
import catsStoreReducer from '../../pages/Cats/cats.reducer';

const rootReducer = combineReducers({
    lang: languageReducer,
    form: formReducer,
    notify: notifyReducer,
    catsStore: catsStoreReducer
});

export default rootReducer;

