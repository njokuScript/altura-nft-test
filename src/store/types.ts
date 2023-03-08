export const GET_NFTS = 'GET_NFTS';
export const GET_COLLECTION = 'GET_COLLECTION';

export const NFT_ERROR = 'NFT_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface INFTState {
  collection?: ICollectionResponse;
  NFTs?: {
    cursor?: string;
    data?: any[];
  };
  error?: string | null;
}

export type IAction = {
  type: string;
  payload: any;
  id: string;
  callback?: { onSuccess?: Function; onError?: Function };
};

export interface ILoading {
  collection: boolean;
  NFTs: boolean;
}
export interface ICollectionResponse {
  collectionName: string;
  collectionDescription: string;
  collectionImage: string;
  collectionAddress: string;
}

export interface INFT {
  id: Number;
  name: string;
  description: string;
  owner: string;
  imageUrl: string;
  metadata: string;
  price: string;
}
