import './App.css';
import { RouterProvider } from 'react-router-dom';
import routerName from './Components/Routes/Routes';

function App() {
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <RouterProvider router={routerName} />
    </div>
  );
}

export default App;