import React, { useState } from 'react';
import { Tabs, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Case01 from './demo/case01';
import Case02 from './demo/case02';
import Case03 from './demo/case03';
import Case04 from './demo/case04';
import Case05 from './demo/case05';
import Case06 from './demo/case06';

function App() {
  const [activeKey, setActiveKey] = useState('1');
  const [num, setNum] = useState(1);
  return (
    <div className="App">
      <h1>Rxjs</h1>
      <Tabs tabPosition='left' activeKey={activeKey} onChange={setActiveKey} destroyInactiveTabPane={true}>
        <Tabs.TabPane key='1' tab='Case01'>
          <Case01 />
        </Tabs.TabPane>
        <Tabs.TabPane key='2' tab='Case02'>
          <Case02 />
        </Tabs.TabPane>
        <Tabs.TabPane key='3' tab='Case03'>
          <Case03 />
        </Tabs.TabPane>
        <Tabs.TabPane key='4' tab='Case04'>
          <Case04 />
        </Tabs.TabPane>
        <Tabs.TabPane key='5' tab='Case05'>
          <InputNumber value={num} onChange={setNum} />
          <Case05 num={num} />
        </Tabs.TabPane>
        <Tabs.TabPane key='6' tab='Case06'>
          <Case06 />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
