/**
 * TodoList.
 * @authors: dawangf (dawangf@sina.com).
 * @createDate: 2019/11/6.
 * @version: 1.0.
 */
import React, {Component} from 'react';
import {Input, Button, List, message, Icon} from "antd";
import 'antd/dist/antd.css';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'


class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('store:', store.getState())
    this.state = store.getState()
    this.changInputValue = this.changInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange)
  }

  render() {
    return (
      <div>
        <div style={{margin: '10px'}}>
          <Input
            placeholder='请输入'
            value={this.state.inputValue}
            style={{width: '250px', marginRight: '10px'}}
            onChange={this.changInputValue}
          />
          <Button
            type='primary'
            onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style={{margin: '10px', width: '350px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item >{item}
                <Icon
                  type="close-circle"
                  style={{float: "right"}}
                  onClick={this.deleteItem.bind(this, index)}
                />
              </List.Item>)}
          />
        </div>
      </div>
      )
   }

  changInputValue(event) {
    const action = changeInputAction(event.target.value)
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }

  clickBtn() {
    if (!this.state.inputValue) return message.warning('请输入添加值')
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    console.log('index:', index)
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

}

export default TodoList;
