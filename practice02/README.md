#### 01
- 首先要安装 redux
- 创建一个 store 和 reducer
- reducer 是存数据的地方（图书馆）
- store 相当于一个中转（图书管理员）
- 在拿数据的地方用 `store.getState()` 拿到数据

#### 02
redux devtools
需要科学上网。。。。。。。

#### 03
- 注意 store 和 reducer 的数据是双向的
- 当需要更改 state 里面的值的时候，需要先创建一个 action
- action 有两个属性，一个 type 一个 vlaue
- 创建好之后通过 `store.dispatch(action);` 把事件注入到 store 里面
- 在 reducer 里面会接收到 action
- 根据判断判断 action 的 type，进行特定的操作
- 把数据处理好之后返回一个 newState
- 在页面里面用 `store.subscribe(storeChange)` 可以订阅到这个 change
- 然后在 `storeChange` 里面 `this.setState(store.getState());` 更新 state