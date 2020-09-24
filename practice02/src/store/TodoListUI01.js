import { Input, Button, List } from "antd";
import React, { Component } from 'react';

class TodoListUI extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ margin: "10px" }}>
                <div>
                    <Input placeholder={ this.props.inputValue }
                        style={{ width: "250px", marginRight: "10px" }} 
                        onChange ={ this.props.changeInputValue.bind(this) }
                        value={ this.props.inputValue }
                    />
                    <Button 
                        type="primary"
                        onClick={this.props.addItem.bind(this)}>
                            增加
                    </Button>
                </div>
                <div style={{ margin: "10px", width: "300px" }}>
                    <List
                        bordered
                        dataSource={ this.props.list }
                        renderItem={ (item, index) => (<List.Item onClick={ this.props.deleteItem.bind(this, index) }>{ item }</List.Item>) }
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoListUI;