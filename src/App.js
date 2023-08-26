import {Routes,  BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Layout from './components/Layout';
import Redirect from './components/Redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Redirect/>}>
            <Route path="/" element={<Layout />} >
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/result" element={<Result/>} />
            </Route>
        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
