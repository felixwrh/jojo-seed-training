import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import FormPage from './pages/form/form';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
