
import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR
} from '../action/types';


const INITIAL_STATE = {
    users: [],
    isLoaing: false,
    isError: false,
    isCreating: false
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
           return {
             ...state, 
             isLoaing: true,
             isError: false
           };

        case FETCH_USER_SUCCESS:
           return {
              ...state, 
              users: action.dataUsers,
              isLoaing: false,
              isError: false
           };

        case FETCH_USER_ERROR:
           return {
              ...state,
              isLoaing: false,
              isError: true
           };

        case CREATE_USER_REQUEST: 
          return {
            ...state, isCreating: true
          }

        case CREATE_USER_SUCCESS: 
          return {
            ...state, isCreating: false
          }

        case CREATE_USER_ERROR: 
          return {
            ...state, isCreating: false
          }

        default: return state;
    }

};

export default userReducer;