import React, { Component } from 'react';
import "antd/dist/antd.css";
import store from "./store";//index 可以不写
// getTodoList getListAction
import { getMyListAction, changeInputAction, addItemAction, deleteItemAction } from "./store/actionCreator"
import TodoListUI from "./store/TodoListUI";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);       
    }

    render() { 
       return(
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                list={this.state.list}
                deleteItem={this.deleteItem}
            ></TodoListUI>
    )}

    storeChange() {
        this.setState(store.getState());
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    addItem(e) {
        const action = addItemAction(e.target.value);
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }

    componentDidMount() {
    //    const action = getTodoList;
    //    store.dispatch(action);

        const action = getMyListAction();
        store.dispatch(action);
    }
}
 
export default TodoList;