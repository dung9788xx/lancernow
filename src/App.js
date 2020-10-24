import React from 'react';
import './App.css';
import Dashboard from "./js/components/dashboard/Dashboard";
import SignIn from "./js/components/auth/SignIn";
import { Provider} from 'react-redux'
import store from "./js/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SignIn/>
      </div>
    </Provider>
  );
}

export default App;
