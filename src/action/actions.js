import { 
  INCREMENT, 
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
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


// những thằng này sẽ nhảy vào reducer và thực thi theo type 

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


// create new user

export const createNewUser = (user) => {
  return async(dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      const res = await axios.post("http://localhost:8080/users/create", {...user});
      if(res && res.data.errCode === 0) {
        dispatch(createUsersSuccess())
        dispatch(fetchAllUsers())
      }
    } catch (error) {
      dispatch(createUsersError())
    }
  }
}

// những thằng này sẽ nhảy vào reducer và thực thi theo type 
export function createUsersRequest(){
  return {
    type: CREATE_USER_REQUEST
  }
}

export function createUsersSuccess() {
  return {
    type: CREATE_USER_SUCCESS
  }
}

export function createUsersError() {
  return {
    type: CREATE_USER_ERROR
  } 
}

// delete a user

export const deleteUser = (id) => {
  return async(dispatch, getState) => {
    dispatch(deleteUsersRequest());
    try {
      const res = await axios.post(`http://localhost:8080/users/delete/${id}`);
      console.log(res);
      if(res && res.data.errCode === 0) {
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUsers());
      }
    } catch (error) {
      dispatch(deleteUsersError());
    }
  }
}

// những thằng này sẽ nhảy vào reducer và thực thi theo type 
export function deleteUsersRequest(){
  return {
    type: DELETE_USER_REQUEST
  }
}

export function deleteUsersSuccess() {
  return {
    type: DELETE_USER_SUCCESS
  }
}

export function deleteUsersError() {
  return {
    type: DELETE_USER_ERROR
  } 
}
