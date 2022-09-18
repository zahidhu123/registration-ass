import { Route, Routes } from 'react-router';
import './App.css';
import Table from './screen/home/table';
import Registration from './screen/registration/registration';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
