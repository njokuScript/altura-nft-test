import { toast } from 'react-toastify';
import axios from 'axios';

export const truncateAddress = (value: string, strLen = 8) => {
  if (value.length <= strLen) {
    return value;
  }

  return `${value.substring(0, 4)}...${value.substring(value.length - 4)}`;
};

export const attachLoader =
  (setter: (setterFuc: any) => any) =>
  (name: string, callback: (param?: any) => Promise<any>) =>
  (...args: any) => {
    const setLoadingTo = (state: any) => (prevState: any) => {
      return {
        ...prevState,
        [name]: state,
      };
    };
    setter(setLoadingTo(true));
    return callback(...args)
      .catch((err: any) => {
        return Promise.reject(err);
      })
      .finally(() => setter(setLoadingTo(false)));
  };

export const handleError = (
  err: any,
  defaultMessage = 'Something went wrong!'
) => {
  const message = err?.response || defaultMessage;
  toast.error(message);
};

export const AlturaApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ALTURA_API_KEY: process.env.REACT_APP_API_KEY,
  },
});
