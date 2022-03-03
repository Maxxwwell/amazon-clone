import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context api/StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //the codee will only run once the app loads
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS__", authUser);
      if (authUser) {
        //the user just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>


    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
`