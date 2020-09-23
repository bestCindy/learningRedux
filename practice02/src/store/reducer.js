const defaultState = {
    inputValue: "Write Something",
    list: [
        "锅包肉",
        "土豆丝",
        "小鸡炖蘑菇",
        "猪肉炖粉条"
    ]
}
export default (state = defaultState, action) => {
    //Reducer 里面只能接收 state，不能改变 state
    if (action.type === "changeInput") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    };

    if (action.type === "addItem") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    return state;
}