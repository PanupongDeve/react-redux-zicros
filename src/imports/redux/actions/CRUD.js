import * as tools from "@imports/utils";

export const getApi = request => async dispatch => {
  const { url, type, typeErr, callback } = request;
  const res = await tools.getApi(url);
  if (res.success) {
    await dispatch({
      type,
      payload: res.data
    });
    await callback();
  } else {
    console.log(res.error);
    await dispatch({
      type: typeErr,
      payload: res.error.data.message
    });
  }
};

export const postApi = request => async dispatch => {
  const { url, data, type, typeErr, callback } = request;
  const res = await tools.postApi(url, data);
  if (res.success) {
    await callback();
  } else {
    console.log(res.error);
    await dispatch({
      type: typeErr,
      payload: res.error.data.message
    });
  }
};

export const patchApi = request => async dispatch => {
  const { url, data, type, typeErr, callback } = request;
  const res = await tools.patchApi(url, data);
  if (res.success) {
    await callback();
  } else {
    console.log(res.error);
    await dispatch({
      type: typeErr,
      payload: res.error.data.message
    });
  }
};

export const deleteApi = request => async dispatch => {
  const { url, type, typeErr, callback } = request;
  const res = await tools.deleteApi(url);
  if (res.success) {
    await callback();
  } else {
    console.log(res.error);
    await dispatch({
      type: typeErr,
      payload: res.error.data.message
    });
  }
};

export const clearStoreApi = (type) => async dispatch => {
  await dispatch({ type })
}
