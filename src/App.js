
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cambodia2019 from './components/pages/Cambodia2019';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Principles from './components/pages/Principles';
import Taiwan2020 from './components/pages/Taiwan2020';
import Footer from './components/Footer';
import Members from './components/pages/Members';
import Vision from './components/pages/Vision';
import Origin from './components/pages/Origin';
import Error from './components/pages/Error';
import Login from './components/Login';
import MainDish from './components/MainDish';
//import MainDishes from './components/MainDishes';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={Home}/>
        <Route path="/plan" component={Home}/>
        <Route path="/principles" component={Principles}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/colab" component={Error}/>
        <Route path="/taiwan_2020" component={Taiwan2020}/>
        <Route path="/cambodia_2019" component={Cambodia2019}/>
        <Route path="/members" component={Members}/>
        <Route path="/vision" component={Vision}/>
        <Route path="/origin" component={Origin}/>
        <Route path="/login" component={Login}/>
        <Route path="/maindish" component={MainDish}/>
      
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
