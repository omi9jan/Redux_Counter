// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './redux/action';

function App() {
  let value = useSelector(store => store => store.count);
  let dispatch = useDispatch()
  return (
    <div>
      <h1>Counter App</h1>
      <div style={{border:"2px solid black",justifyContent:"center"}}>
        {/* <h1>Hiiiiii</h1> */}
        <h2>Count_Value : {value}</h2>
        <button onClick={(dispatch(Increment))}>+</button>
        <button onClick={(dispatch(Decrement))}>-</button>
      </div>
    </div>
  );
}

export default App;
