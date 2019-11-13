import React, { Fragment } from 'react';
import { Globalstyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Login from './pages/login/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Write from './pages/write/index';
function App() {
  return (
    <Fragment >
      <Globalstyle />
      <IconfontStyle></IconfontStyle>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path='/' exact render={() => <Home></Home>}></Route>
            <Route path='/Login' exact render={() => <Login></Login>}></Route>
            <Route path='/Write' exact render={() => <Write></Write>}></Route>
            {/* <Route path='/detail' exact render={() => <Detail></Detail>}></Route> */}
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
