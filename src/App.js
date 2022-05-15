import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import View from "./components/student/View";
import Edit from "./components/student/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/view/:id" element={<View/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
      </Routes>
    </>
  );
}

export default App;
