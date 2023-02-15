import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from './redux/store';

function App(props) {

  // người dùng fire một event thì phải nhấn vào một cái nút 
  // gọi đến hàm đó và xử lý sự kiện nhấn nút 


  // event handler
  const handleIncrease = () => {
    // dispatch action  --> bắn từ react vào trong store 
    props.increaseCounter()

    //   store.dispatch({
    //     type: 'Test', 
    //     payload: {'name' : 'lam'}              // ---> cách viết này giống như cách trên, cũng dispatch một action
    //   }                                        // nhưng cách viết trên ngắn gọn hơn được redux hỗ trợ để chúng ta code ít đi 
    // )                                          // nhờ có thằng connect của thư viện react/redux 
                                                  // và mapDispatchToProps 
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>Count: {props.count}</div>
      <div>hello: {props.name}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}



// map state của thằng ( Redux ) cho vào props của thằng ( React )
const mapStateToProps = state => {
  return {
    count: state.counter123.count,
    name: state.counter123.name
  }
}

// map dispatch (redux) to props react 
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

// connect là một HOC 
// cấy hàm hai function vào Component App 
export default connect(mapStateToProps, mapDispatchToProps)(App)
