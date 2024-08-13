import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import ViewNOtes from './pages/viewNOtes/ViewNOtes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create/notes' element={<Create />} />
          <Route path='/notes/view' element={<ViewNOtes/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
