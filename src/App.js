import React, { Component } from 'react';
import './App.css';
import CandleStickChart from './components/CandleStickChart';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';

// Use react-router-dom for navigation
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar/>
          <div className="container">
          <Route exact path="/"
          render={(props) => <CandleStickChart {...props} timeStamp={''} />} 
          />
          <Route exact path="/min-1" 
          render={(props) => <CandleStickChart {...props} timeStamp={'?time=MIN_1'} />}
          /> 
          <Route exact path="/min-5" 
          render={(props) => <CandleStickChart {...props} timeStamp={'?time=MIN_5'} />}
          />
          <Route exact path="/week-1" 
          render={(props) => <CandleStickChart {...props} timeStamp={'?time=WEEK_1'} />}
          />
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
