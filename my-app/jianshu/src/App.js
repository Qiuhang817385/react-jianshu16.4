import React, { Fragment } from 'react';
import { Globalstyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment >
      <Globalstyle />
      <IconfontStyle></IconfontStyle>
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <div>
            <Route path='/' exact render={() => <Home></Home>}></Route>
            {/* <Route path='/detail' exact render={() => <Detail></Detail>}></Route> */}
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
