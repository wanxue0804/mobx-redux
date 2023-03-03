import { configure } from 'mobx';

configure({
    enforceActions: 'always'
});

const storeFiles = require.context('./', true, /\.(ts|js|tsx|jsx)$/);

const excludeFiles= ['./index.ts', './storeHooks.ts', '.d.ts'];
const store = storeFiles.keys().reduce((result, item) => {
    if (excludeFiles.includes(item)) return result;
    const startIndex = item.lastIndexOf('/') + 1;
    const endIndex = item.lastIndexOf('.');
    // @ts-ignore
    result[`${item.substring(startIndex, endIndex)}Store`] = storeFiles(item).default;
    return result;
}, {});



export default store;
