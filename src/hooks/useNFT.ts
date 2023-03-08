import { actions, useDispatch, useStore } from '../store/NFTStore';
import React from 'react';
import { attachLoader, Blockspan, handleError } from '../libs/utils';
import type { ILoading } from '../store/types';

export const useNFT = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const initialLoading = {
    collection: false,
    NFTs: false,
  };

  const [loading, setLoading] = React.useState<ILoading>(initialLoading);
  const activate = attachLoader(setLoading);

  /**
   * @dev Gets collection data for an address
   * @param address Address of the specified collection
   * @returns Collection response
   */
  const getCollection = activate('collection', async (address: string) => {
    try {
      const response = await Blockspan.get(
        `/collections/contract/${address}?chain=eth-main`
      );
      const exchange_data = response.data.exchange_data[1];
      const responseObj = {
        collectionName: exchange_data.name,
        collectionDescription: exchange_data.description,
        collectionImage: exchange_data.image_url,
        collectionAddress: address,
      };
      dispatch({ type: actions.GET_COLLECTION, payload: responseObj });
    } catch (err: any) {
      handleError(err);
      dispatch({
        type: actions.NFT_ERROR,
        payload: err?.response?.data?.errors[0]?.msg,
      });
    }
  });
  const getNfts = activate(
    'NFTs',
    async (address: string, cursor?: string, size?: Number) => {
      try {
        let response;
        if (cursor) {
          response = await Blockspan.get(
            `/nfts/contract/${address}?chain=eth-main&cursor=${cursor}&page_size=${size}`
          );
        } else {
          response = await Blockspan.get(
            `/nfts/contract/${address}?chain=eth-main`
          );
        }

        const NftResponse = {
          cursor: response.data.cursor,
          data: [],
        };
        // filter out NFTs with no price
        const filteredResponse = response.data.results.filter(
          (nft: any) => nft.recent_price !== null
        );

        NftResponse.data = filteredResponse;

        dispatch({ type: actions.GET_NFTS, payload: NftResponse });
      } catch (err: any) {
        handleError(err);
        dispatch({
          type: actions.NFT_ERROR,
          payload: err?.response?.data?.errors[0]?.msg,
        });
      }
    }
  );

  // Clear Errors
  const clearErrors = () => dispatch({ type: actions.CLEAR_ERRORS });
  return {
    collection: store.collection,
    nfts: store.NFTs,
    error: store.error,
    getCollection,
    getNfts,
    loading: loading,
    clearErrors,
  };
};
