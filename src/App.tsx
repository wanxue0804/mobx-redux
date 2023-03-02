import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from '@/redux/store';
import ReduxPage from '@/pages';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.APP}>
      <h2>这里将会展示两个不同的状态管理库</h2>
      <div className='container'>
        <div className='redux'>
          <ReduxProvider store={reduxStore}>
            <div>
              <p>这里是redux状态管理</p>
              <ReduxPage />
            </div>
          </ReduxProvider>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
