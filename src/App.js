import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Offerings from './Pages/Home/Offerings/Offerings';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Offerdetail from './Pages/Home/OfferDetail/Offerdetail';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/Context/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Aboutus from './Pages/AboutUs/Aboutus';
import Contactus from './Pages/ContactUs/Contactus';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='/offerings'>
              <Offerings></Offerings>

            </Route>
            <Route path='/aboutus'>
              <Aboutus></Aboutus>

            </Route>
            <Route path='/contactus'>
              <Contactus></Contactus>

            </Route>
            <PrivateRoute path="/offers/:offerId">
              <Offerdetail></Offerdetail>
            </PrivateRoute>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer></Footer>
         
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
