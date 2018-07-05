import { CHANGELANGUAGE } from "@imports/redux/types";
import * as tools from '@imports/utils'

export const changeLanguage = lang => dispatch => {
  dispatch({
    type: CHANGELANGUAGE,
    payload: lang
  });
};

