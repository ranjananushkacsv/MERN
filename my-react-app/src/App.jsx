import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './screen/Navbar/Navbar';
import Home from './screen/Home/Home';
import Dashboard from './screen/Dashboard/Dashboard';
import Settings from './screen/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
