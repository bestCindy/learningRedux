import React, { Component } from 'react';
import { connect } from "react-redux";

const TodoList = (props) => {
    let { inputValue, inputChange, addItem, list } = props;

    return (
        <div>
            <div>
                <input
                    value = { inputValue }
                    onChange = { inputChange.bind(this) }
                />
                <button onClick = { addItem.bind(this)} >提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key = { index }>{ item }</li>)
                    })
                }
            </ul>
        </div>
    );
}

//state to props
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = {
                type: "change_input",
                value: e.target.value
            };
            dispatch(action);
        },
        addItem(e) {
            const action = {
                type: "add_item",
            };
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);