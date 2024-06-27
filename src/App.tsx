import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <img src='logo.png' alt='logo' className='logo' />
      <Outlet />
    </div>
  );
}

export default App;
