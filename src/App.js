/* eslint no-use-before-define: 0 */  // 0 --> OFF // 2 --> OFF
import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Header from './components/Header/Header.js';
import ScrollIntoView from './components/Navigation/ScrollIntoView';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import { Switch, Route } from 'react-router-dom';



const NoMatch = () => {
  return (
    <div>
      <h3>404 Not found</h3>
    </div>
  );
};

function App() {
  return (
    <ScrollIntoView>
      <Header />

      <Container maxWidth='xl' disableGutters style={{ marginTop: 92.7 }}>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/mealbox/:mealboxId' component={boxPage} /> */}
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Container>
      <Box bgcolor='#FDFCFC' pt={9} px={{ xs: 3, sm: 5, md: 9 }}>
        FOOTER
      </Box>
    </ScrollIntoView>
    // <Box>
    //   <Button variant="contained" color="primary">
    //     Hello World
    // </Button>
    // </Box>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
