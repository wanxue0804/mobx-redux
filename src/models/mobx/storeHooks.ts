import React from 'react';
import { configure } from 'mobx';
import home from './home';
import person from './person';


configure({
    enforceActions: 'always'
});

export const homeContext = React.createContext(home);
export const useHomeStore = () => React.useContext(homeContext);

export const personContext = React.createContext(person);
export const usePersonStore = () => React.useContext(personContext);



// 最终export 各个store
// 例如 
// eslint-disable-next-line import/first
// import home from './home';
// export const homeContext = React.createContext(home);
// export const useHomeStore = () => React.useContext(homeContext);


// const storeFiles = require.context('./', true, /\.(ts|js|tsx|jsx)$/);

// const excludeFiles= ['./index.ts', './storeHooks.ts', '.d.ts'];
// export const store = storeFiles.keys().reduce((result, item) => {
//     if (excludeFiles.includes(item)) return result;
//     const startIndex = item.lastIndexOf('/') + 1;
//     const endIndex = item.lastIndexOf('.');
//     const name = item.substring(startIndex, endIndex);
//     const contextName = `${name}Context`;
//     const hooksName = `use${name.replace(name.charAt(0), name.charAt(0).toUpperCase())}Hooks`;
//     const context = React.createContext(name);
//     // @ts-ignore
//     result[contextName] = context;
//     // @ts-ignore
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     result[hooksName] = () => React.useContext(context);
//     return result;
// }, {});

