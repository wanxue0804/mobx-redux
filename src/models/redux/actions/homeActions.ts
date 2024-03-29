import * as actionsType from '@/redux/actions/constant';


export function add (payload: any = {}) {
    return {
        type: actionsType.ADD,
        payload
    }
};

export function deleteItem (payload: any = {}) {
    return {
        type: actionsType.DELETE,
        payload
    }
}

export function toggleState (payload: any = {}) {
    return {
        type: actionsType.TOGGLE_COMPLETE,
        payload
    }
}