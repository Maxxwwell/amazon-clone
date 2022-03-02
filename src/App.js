import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />

        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
`