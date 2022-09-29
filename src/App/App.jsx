import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Catalog} from  '../pages/Catalog';
import {Checkout} from '../pages/Checkout';
import {Giftcards} from '../pages/Giftcards';
import {Home} from '../pages/Home';
import {Product} from '../pages/Product'



function App() {
  document.body.classList.add('body-styling');
  
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
          element={<Product />}
          path="/catalog/:productIndex"
          >
          </Route>

        <Route
        element={<Checkout />}
        index
        path="/checkout"
        >
         </Route>
         
        <Route
        element={<Giftcards />}
        index
        path="giftcards"
        >
        </Route>
        {/* <Route
        element={<ErrorPage />}
        path="*"
        >
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
