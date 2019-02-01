import { GET_USERS, REQUEST_ERROR, REQUEST_START } from '../constants/getUser';

const initialState = {
  isLoading: false,
  requestError: "",
  users: [],
};


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_START:
          return {
            ...state,
            isLoading: true
          };
        case REQUEST_ERROR:
          return {
            ...state,
            isLoading: false,
            requestError: action.errorMessage
          };
        case GET_USERS:
          return {
            ...state,
            isLoading: false,
            requestError: "",
            users: [...action.users]
          };
        default:
          return state;
      }
}
