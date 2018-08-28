import LangOTS from '../../DataHelper/ObjectToStore/LangOTS';


export const selectLang = (lang) => async (dispatch) => {
    LangOTS.toDispatch(LangOTS.CHANGE_LANG, lang)(dispatch);
}