import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import './App.css';
import About from './components/About/about.component';
import { ContactUs } from './components/Contact/contact.component';
import { Home } from './components/Home/home.component';
import Navbar from './components/Navbar/navbar.comonents';

function App() {
  return (
    
   <>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about'  component={About} />
        {/* <Route path='/projects'  component={Projects} /> */}
        <Route path='/contact'  component={ContactUs} />
      </Switch>
    </>
  );
}

export default App;
