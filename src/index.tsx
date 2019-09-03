import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducer";
import React from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas/sagas';
import { BrowserRouter } from 'react-router-dom';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// export const run = () => {
//   store.dispatch({type: "LOAD_INIT_DATA"});
// }