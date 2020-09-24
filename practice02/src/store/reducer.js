import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes"

const defaultState = {
    inputValue: "Write Something",
    // list: [  ]
    list: [
        "锅包肉",
        "土豆丝",
        "小鸡炖蘑菇",
        "猪肉炖粉条"
    ]
}
export default (state = defaultState, action) => {
    //Reducer 里面只能接收 state，不能改变 state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    };

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }

    // if (action.type === GET_LIST) {
    //     let newState = JSON.parse(JSON.stringify(state));
    //     newState.list = action.data.data.list;
    //     return newState;
    // }

    return state;
}