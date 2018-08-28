import * as Example from '@imports/redux/types';

export default (state = { loading: true }, action) => {
    switch (action.type) {
        case Example.FetchExamples:
            return {...state, all: action.payload, loading: false };
        case Example.ErrorFetchExamples:
            return {...state, examplesErr: action.payload, loading: false };
        case Example.FetchExampleById:
            return {...state, example: action.payload, loading: false }
        case Example.ErrorFetchExampleById:
            return {...state, exampleErr: action.payload, loading: false };
        case Example.PostExample:
            return {...state, postExampleSuccess: true, loading: false };
        case Example.ErrorPostExample:
            return {...state, postExampleSuccess: false, loading: false };
        case Example.PatchExample:
            return {...state, patchExampleSuccess: true, loading: false };
        case Example.ErrorPatchExample:
            return {...state, patchExampleSuccess: false, loading: false };
        case Example.DeleteExample:
            return {...state, deleteExampleSuccess: true, loading: false };
        case Example.ErrorDeleteExample:
            return {...state, deleteExampleSuccess: false, loading: false };
        case Example.ClearStoreExamples:
            return {};
        default:
            return state;
}
}