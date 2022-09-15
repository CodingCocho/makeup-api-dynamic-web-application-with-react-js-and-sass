import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Catalog} from  '../pages/Catalog';
import {Checkout} from '../pages/Checkout';
import {Blushes} from '../pages/Blushes';
import {Bronzers} from '../pages/Bronzers';
import  {Eyebrows} from '../pages/Eyebrows';
import {Eyeliners} from '../pages/Eyeliners';
import {Eyeshadows} from '../pages/Eyeshadows';
import {Foundations} from '../pages/Foundations';
import {Lipliners} from '../pages/Lipliners';
import {Lipsticks} from '../pages/Lipsticks';
import {Mascaras} from '../pages/Mascaras';
import {Nailpolishes} from '../pages/Nailpolishes';
import {Giftcards} from '../pages/Giftcards';
import {Home} from '../pages/Home';


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
        element={<Giftcards />}
        path="/giftcards"
        >
        </Route>
        <Route
        element={<Checkout />}
        path="/checkout"
        >
        </Route>
        <Route
        element={<Blushes />}
        path="/blushes"
        >
        </Route>
        <Route
        element={<Bronzers />}
        path="/bronzers"
        >
        </Route>
        <Route
        element={<Eyebrows />}
        path="/eyebrows"
        >
        </Route>
        <Route
        element={<Eyeliners />}
        path="/eyeliners"
        >
        </Route>
        <Route
        element={<Eyeshadows />}
        path="/eyeshadows"
        >
        </Route>
        <Route
        element={<Foundations />}
        path="/foundations"
        >
        </Route>
        <Route
        element={<Lipliners />}
        path="/lipliners"
        >
        </Route>
        <Route
        element={<Lipsticks />}
        path="/lipsticks"
        >
        </Route>
        <Route
        element={<Mascaras />}
        path="/mascaras"
        >
        </Route>
        <Route
        element={<Nailpolishes />}
        path="/nailpolishes"
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
