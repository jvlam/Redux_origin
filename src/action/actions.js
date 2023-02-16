import { 
  INCREMENT, 
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from "./types";

import axios from 'axios';


export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};


// input đầu vào của reducer là actions 
// - do redux có store lưu trữ data global chạy song song với app 
// vì vậy mỗi hành động thao tác trên react app, cần có cơ chế gì đấy để nói cho redux biết chúng ta vừa thao tác với cái gì 
// ---> đó chính là actions 

// chốt hạ: actions nôm na là thông báo với thằng redux là mày phải làm gì, một hành động gì đó 
// bên trong nó chứa tên hành động (type)
// và chứa data (payload)


export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest())
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data))
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError())
    }
  }
}

export function fetchUsersRequest(){
  return {
    type: FETCH_USER_REQUEST
  }
}

export function fetchUsersSuccess(data) {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: data
  }
}

export function fetchUsersError() {
  return {
    type: FETCH_USER_ERROR
  }
}