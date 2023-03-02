import { AnyAction } from 'redux';
import * as actionsType from '@/redux/actions/constant';

export interface IhomeState {
    count: number;
    todoList: Ilist[];
};

export interface Ilist {
    id: string;
    task: string;
    complete: boolean;
}

const initialState: IhomeState = {
    count: 0,
    todoList: []
}

const homeReducer = (state: IhomeState = initialState, action: AnyAction): IhomeState => {
    switch(action.type) {
        case actionsType.ADD:
            return {
                todoList: state.todoList.concat(action.payload),
                count: state.todoList.length+1
            };
        case actionsType.DELETE:
            return {
                todoList: state.todoList.filter(item => item.id !== action.payload.id),
                count: state.todoList.length-1
            };
        case actionsType.TOGGLE_COMPLETE:
            return {
                ...state,
                todoList: state.todoList.map((item) => {
                    if (item.id === action.payload.id) {
                        item.complete = !item.complete;
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}

export default homeReducer;
