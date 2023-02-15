import { INCREMENT, DECREMENT } from "./types";

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