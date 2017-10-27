import * as clientApi from '../../api/client';
import { assetActions } from '../constants/actionTypes';

export const requestAssetsSuccess = response => ({
  type: assetActions.REQUEST_ASSETS_SUCCESS,
  data: response.assets,
});

export const getAssets = (assetsParameters, courseDetails) =>
  dispatch =>
    clientApi.requestAssets(courseDetails.id, {
      page: assetsParameters.page,
      assetTypes: assetsParameters.assetTypes,
    })
      .then(response => response.json())
      .then(json => dispatch(requestAssetsSuccess(json)));

export const filterUpdate = (filterKey, filterValue) => ({
  type: assetActions.FILTER_UPDATED,
  data: { [filterKey]: filterValue },
});

export const deleteAssetSuccess = (assetId, response) => ({
  type: assetActions.DELETE_ASSET_SUCCESS,
  assetId,
  response,
});

export const assetXHRFailure = response => ({
  type: assetActions.ASSET_XHR_FAILURE,
  response,
});

export const deleteAsset = (assetsParameters, assetId, courseDetails) =>
  dispatch =>
    clientApi.requestDeleteAsset(courseDetails.id, assetId)
      .then((response) => {
        if (response.ok) {
          dispatch(deleteAssetSuccess(assetId, response));
        } else {
          dispatch(assetXHRFailure(response));
        }
      });

export const clearAssetsStatus = () =>
  dispatch =>
    dispatch({ type: assetActions.CLEAR_ASSETS_STATUS });
