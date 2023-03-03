import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from '@/redux/store';
import ReduxPage from '@/pages';
import { Provider as MobxProvider } from 'mobx-react';
import mobxStore from '@/mobx/index';
import MobxPage from '@/pages/home';

import HooksMobx from '@/pages/home2';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.APP}>
      <h2>这里将会展示两个不同的状态管理库</h2>
      <div className='container'>
        <div className='redux'>
          <p>这里是redux状态管理</p>
          <ReduxProvider store={reduxStore}>
            <ReduxPage />
          </ReduxProvider>
        </div>
        <div className='redux mobx'>
          <p>这里是mobx状态管理</p>
          <MobxProvider {...mobxStore}>
            <MobxPage />
          </MobxProvider>
        </div>
        <div className='redux mobx'>
          <p>这里是mobx hooks 无需Provider 包装的状态管理</p>
          <HooksMobx />
        </div>
      </div>
    </div>
  );
}

export default App;
