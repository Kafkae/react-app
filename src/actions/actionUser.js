import { GET_USERS, REQUEST_ERROR, REQUEST_START } from '../constants/getUser';

export const addUsers = users => ({
  type: GET_USERS,
  users
});

export const requestStart = () => ({
  type: REQUEST_START
});

export const requestError = errorMessage => ({
  type: REQUEST_ERROR,
  errorMessage
});
