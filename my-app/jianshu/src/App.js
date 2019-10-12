import React, { Fragment } from 'react';
import { Globalstyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';


function App() {
  return (
    <Fragment >
      <Globalstyle />
      <IconfontStyle></IconfontStyle>
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </Fragment>
  );
}

export default App;
