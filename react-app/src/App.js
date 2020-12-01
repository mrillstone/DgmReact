import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Dispatches from './components/Dispatches';
import DispatchMenu from './components/DispatchMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import { Container } from '@material-ui/core';
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ToastProvider autoDismiss={true}>
          <Container maxWidth="lg">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dispatch" component={DispatchMenu} />
              <Route path="/about" component={About} />
              <Route path="/admin" component={Admin} />
            </Switch>
          {/* <Dispatches /> */}
          </Container>
        </ToastProvider>
      </Provider>
    </Router>
  );
}

export default App;
