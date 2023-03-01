import { AnyAction } from 'redux';
import * as actionsType from '@/redux/actions/constant';

export interface IhomeState {
    count: number;
    todoList: {
        id: string;
        task: string;
    }[]
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
        default:
            return state;
    }
}