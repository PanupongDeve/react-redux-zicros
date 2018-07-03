import { CHANGELANGUAGE, SET_DEFAULT_LANGUAGE } from '@imports/redux/types';
import * as tools from '@imports/utils';

export default (state = 'en', action) => {
    switch (action.type) {
        case CHANGELANGUAGE:
            tools.saveLanguageToStorage(action.payload);
            return action.payload;
        case SET_DEFAULT_LANGUAGE:
             action.payload();
             return {...state};
        default:
            tools.setDefaultLanguage();
            return state;
    }
}