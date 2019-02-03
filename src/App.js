import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import ItemsList from './containers/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <ItemsList/>
        </CustomLayout>
      </div>
    );
  }
}

export default App;
