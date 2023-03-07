export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export const GET_COLLECTION = 'GET_COLLECTION';

export const COLLECTION_ERROR = 'COLLECTION_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface ICollectionState {
  collection?: object;
  collections?: [];
  error: string | null;
}
