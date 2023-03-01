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

export default (state: IhomeState = initialState, action: AnyAction): IhomeState => {
    switch(action.type) {
        case actionsType.ADD:
            return {
                todoList: state.todoList.concat(action.payload),
                count: state.todoList.length++
            };
        case actionsType.DELETE:
            const index = state.todoList.findIndex(item => item.id === action.payload.id);
            return {
                todoList: state.todoList.splice(index, 1),
                count: state.todoList.length--
            }
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