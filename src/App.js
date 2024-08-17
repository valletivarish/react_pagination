import './App.css';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login'
import Data from './components/Data'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;
