import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Dispatches from './components/Dispatches';

function App() {
  return (
    <Provider store={store}>
      <Dispatches />
    </Provider>
  );
}

export default App;
