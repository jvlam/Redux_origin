import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from './redux/store';

import { useSelector, useDispatch } from 'react-redux';

function App(props) {

  const newCount = useSelector((state) => state.counter123.count)
  const name = useSelector((state) => state.counter123.name);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    
    dispatch(increaseCounter())
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>Count: {newCount}</div>
      <div>hello: {name}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}



// // map state của thằng ( Redux ) cho vào props của thằng ( React )
// const mapStateToProps = state => {
//   return {
//     count: state.counter123.count,
//     name: state.counter123.name
//   }
// }

// // map dispatch (redux) to props react 
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// // connect là một HOC 
// // cấy hàm hai function vào Component App 
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App