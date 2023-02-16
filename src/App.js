import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from './redux/store';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App(props) {

  const newCount = useSelector((state) => state.counter123.count)
  const name = useSelector((state) => state.counter123.name);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    
    dispatch(increaseCounter())
    
  }

  useEffect(() => {
    fetchAllUsers();
  }, [])

  const fetchAllUsers = async() => {
    const res = await axios.get('http://localhost:8080/users/all');
    const data = res && res.data ? res.data : []
    console.log('>>>check data: ', data);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
      <div>Count: {newCount}</div>
      <div>hello: {name}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header> */}
      <Home/>
    </div>
  );
}

export default App