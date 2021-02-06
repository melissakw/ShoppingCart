import React from "react";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";
import { PersistGate } from "redux-persist/es/integration/react";

import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Error from "./Components/Error/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const { persistor, store } = ConfigureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
