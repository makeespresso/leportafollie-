// import React from 'react';
// import { Switch, Route} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import UxuiDesign from './components/UxuiDesign';
// import WebDevelopment from './components/WebDevelopment';
// import Contact from './components/Contact';

// const Routes = () => {
//     return (
// <Switch>
//     <Route exact path="/" component={Home}/>
//     <Route exact path="/About" component={About}/>
//     <Route exact path="/UxuiDesign" component={UxuiDesign}/>
//     <Route exact path="/WebDevelopment" component={WebDevelopment}/>
//     <Route exact path="/Contact" component={Contact}/>
// </Switch>
//     )
// }

// export default Routes

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Webdevelopment from './components/WebDevelopment';
import UxuiDesign from './components/UxuiDesign';
import Contact from './components/Contact';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Webdevelopment" component={Webdevelopment} />
      <Route exact path="/UxuiDesign" component={UxuiDesign} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  )
}
export default Routes