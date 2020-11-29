import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Dispatches from './components/Dispatches';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Dispatches />

      </Container>
    </Provider>
  );
}

export default App;
