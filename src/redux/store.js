import { createStore, applyMiddleware  } from "redux";

import rootReducer from "../reducer/rootReducer";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;


// A store is an object that holds the application's state tree. 
// There should only be a single store in a Redux app, as the composition happens on the reducer level.

// - để tạo ra store thì cần gọi hàm createStore của thư viện redux 
// để cho store hoạt động có bao nhiêu reducer sẽ đẩy hết vào store , bao gồm các middleWare như  composeWithDevTools()

