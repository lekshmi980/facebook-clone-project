import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useStateValue } from './StateProvider';




function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ?(
        <Login />
      ) : (

      
        <>
          <Header/>
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
            
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
