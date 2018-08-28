import { CHANGELANGUAGE, SET_DEFAULT_LANGUAGE } from '@imports/redux/types';
import * as tools from '@imports/utils';

export default (state = 'en', action) => {
    switch (action.type) {
        case CHANGELANGUAGE:
            tools.saveLanguageToStorage(action.payload);
            return action.payload;
        default:
            tools.setDefaultLanguage();
            return state;
    }
}