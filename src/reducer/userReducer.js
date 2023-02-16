
import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR 
} from '../action/types';


const INITIAL_STATE = {
    users: [],
    isLoaing: false,
    isError: false
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
          console.log('FETCH_USER_REQUEST', action);
           return {
             ...state, 
             isLoaing: true,
             isError: false
           };

        case FETCH_USER_SUCCESS:
          console.log('FETCH_USER_SUCCESS', action);
           return {
              ...state, 
              users: action.dataUsers,
              isLoaing: false,
              isError: false
           };

        case FETCH_USER_ERROR:
          console.log('FETCH_USER_ERROR', action);
           return {
              ...state,
              isLoaing: false,
              isError: true
           };

         default: return state;

    }

};

export default userReducer;