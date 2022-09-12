import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Catalog} from  './pages/Catalog';
import {Checkout} from './pages/Checkout';
import {Giftcards} from './pages/Giftcards';
import {Home} from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        element={<Home />}
        path="/"
        >
        </Route>
        <Route
        element={<Catalog />}
        path="/catalog"
        >
        </Route>
        <Route
        element={<Giftcards />}
        path="/giftcards"
        >
        </Route>
        <Route
        element={<Checkout />}
        path="/checkout"
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
