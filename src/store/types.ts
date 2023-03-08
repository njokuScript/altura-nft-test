export const GET_NFTS = 'GET_NFTS';
export const GET_COLLECTION = 'GET_COLLECTION';

export const NFT_ERROR = 'NFT_ERROR';

export interface INFTState {
  collection?: object;
  NFTs?: object;
  error: string | null;
}
