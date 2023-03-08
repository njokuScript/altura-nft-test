import { actions, useDispatch, useStore } from '../store/CollectionStore';
import React from 'react';
import { AlturaApi, attachLoader, handleError } from '../libs/utils';
import { toast } from 'react-toastify';

export const useCollection = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState({});
  const activate = attachLoader(setLoading);

  const getCollections = activate('collections', async () => {
    try {
      const response = await AlturaApi.get(
        '/collection?&sortBy=volume_30d&isVerified=true&chainId=1'
      );
      dispatch({ type: actions.GET_COLLECTIONS, payload: response.data });
    } catch (err) {
      handleError(err);
    }
  });
  const getCollection = activate('collection', async (address: string) => {
    try {
      const response = await AlturaApi.get(`/collection/${address}`);
      dispatch({ type: actions.GET_COLLECTIONS, payload: response.data });
    } catch (err) {
      handleError(err);
    }
  });
  return {
    collection: store.collection,
    collections: store.collectins,
    error: store.error,
    getCollections,
    getCollection,
    loading: loading,
  };
};
