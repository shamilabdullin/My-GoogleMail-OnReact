import './App.css';
import { Button } from 'react-bootstrap';
import Main from "./pages/Main";
import Mail from "./pages/Mail";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import TestMail from './pages/Mail'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/main"><Main /></Route>
          <Route path="/mail"><Mail /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
