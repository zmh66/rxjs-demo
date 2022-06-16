import React, { useState } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Case01 from './demo/case01';
import Case02 from './demo/case02';

function App() {
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div className="App">
      <h1>rxjs</h1>
      <Tabs activeKey={activeKey} onChange={setActiveKey} destroyInactiveTabPane={true}>
        <Tabs.TabPane key='1' tab='示例1'>
          <Case01 />
        </Tabs.TabPane>
        <Tabs.TabPane key='2' tab='示例2'>
          <Case02 />
        </Tabs.TabPane>
      </Tabs>
      
    </div>
  );
}

export default App;
