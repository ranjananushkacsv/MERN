import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Navbar/Navbar';
import Home from './screens/Home/Home';
import Dashboard from './screens/Dashboard/Dashboard';
import Settings from './screen/Settings/Settings';
import Profile from './screen/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Placing Navbar outside so it remains visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
