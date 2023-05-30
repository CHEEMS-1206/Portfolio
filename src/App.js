import './App.css';
import { RouterProvider } from 'react-router-dom';
import routerName from './Components/Routes/Routes';

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(
  fas,
  // faTwitter,
  // faFontAwesome,
  // faHatCowboy,
  // faHatChef,
  // faPlateUtensils
);


function App() {
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <RouterProvider router={routerName} />
    </div>
  );
}

export default App;