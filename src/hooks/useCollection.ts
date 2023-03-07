import { actions, useDispatch, useStore } from '../store/CollectionStore';
import React from 'react';
import { attachLoader } from '../libs/utils';
import { toast } from 'react-toastify';

export const useCollection = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState({});
  const activate = attachLoader(setLoading);
};
