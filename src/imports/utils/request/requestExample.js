import * as Example from '@imports/redux/types/exampleTypes';

import RootUrl from '../RootUrl';


export const requestExamples = (callback) => {
    return {
        url: `${RootUrl}/examples`,
        type: Example.FetchExamples,
        typeErr: Example.ErrorFetchExamples,
        callback
    }
}


export const requestExampleById = (id, callback) => {
    return {
        url: `${RootUrl}/example/${id}`,
        type: Example.FetchExampleById,
        typeErr: Example.ErrorFetchExampleById,
        callback
    }
}


export const requestPostExample = (data, callback) => {
    return {
        url: `${RootUrl}/example`,
        data: data,
        type: Example.PostExample,
        typeErr: Example.ErrorPostExample,
        callback
    }
}


export const requestPatchExample = (id, data, callback) => {
    return {
        url: `${RootUrl}/example/${id}`,
        data,
        type: Example.PatchExample,
        typeErr: Example.ErrorPatchExample,
        callback
    }
}


export const requestDeleteExample = (id, callback) => {
    return {
        url: `${RootUrl}/example/${id}`,
        type: Example.DeleteExample,
        typeErr: Example.ErrorDeleteExample,
        callback
    }
}


export const clearStoreExamples = () => {
    return Example.ClearStoreExamples;
}