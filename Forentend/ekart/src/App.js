import './App.css';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Producttab from './components/tab/Producttab'
import Usertab from './components/tab/Usertab'
import Subproducttab from './components/tab/Subproducttab'
import Offertab from './components/tab/Offertab';
import Admintab from './components/tab/Admintab';

function App() {
  return (
    <div>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Producttab/>} />
          <Route path="/subproduct" element={<Subproducttab />} />
          <Route path="/offerdata" element={<Offertab />} />
          <Route path="/admin" element={<Admintab />} />
          <Route path="/user" element={<Usertab/>} />
        </Routes>
      </Sidebar>


    </div>
  );
}

export default App;
