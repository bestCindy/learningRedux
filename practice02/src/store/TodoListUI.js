import { Input, Button, List } from "antd";
import React from 'react';

const TodoListUI = (props) => {
    return ( 
        <div style={{ margin: "10px" }}>
            <div>
                <Input placeholder={ props.inputValue }
                    style={{ width: "250px", marginRight: "10px" }} 
                    onChange ={ props.changeInputValue.bind(this) }
                    value={ props.inputValue }
                />
                <Button 
                    type="primary"
                    onClick={props.addItem.bind(this)}>
                        增加
                </Button>
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered
                    dataSource={ props.list }
                    renderItem={ (item, index) => (<List.Item onClick={ props.deleteItem.bind(this, index) }>{ item }</List.Item>) }
                />
            </div>
        </div>
    );
}

export default TodoListUI;