import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import homeReducer, { IhomeState } from './homeReducer';



// 第一种手动引入模式
export interface RootState {
    homeReducer: IhomeState
}

// const reducers: ReducersMapObject<RootState, AnyAction> = {
//     homeReducer
// }
// const reducer: Reducer<RootState, AnyAction> = combineReducers(reducers);
// 


// 第二种自动引入模式
const reducerFiles = require.context('./', true, /.(js|ts|tsx|jsx)$/);
const reduceName = reducerFiles.keys().reduce((result, item) => {
    if (item === './index.ts' || item.indexOf('.d.ts') > -1) {
        return result;
    }
    const start = item.lastIndexOf('/') + 1;
    const end = item.lastIndexOf('.');
    //   @ts-ignore
    // result.push(reducerFiles(item).default);
    result[item.substring(start, end)] = reducerFiles(item).default
    return result;
}, {});
const reducer = combineReducers(reduceName);
  
export default reducer;
