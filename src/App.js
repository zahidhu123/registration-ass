import { Route, Routes } from 'react-router';
import './App.css';
import Home from './screen/home/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
