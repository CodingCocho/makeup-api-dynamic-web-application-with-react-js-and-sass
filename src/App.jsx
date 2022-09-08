import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Giftcards} from './pages/Giftcards';

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
        element={<Giftcards />}
        path="/giftcards"
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
