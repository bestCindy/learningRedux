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

#### 04
把 actionType 抽出来
把 actionCreate 抽出来

#### 05 
- 只能有一个 store
- 只有 store 能改变自己的内容，reducer 不能改变
    - 在 reducer 里面返回的 newState 是返回给 store，然后 store 根据 newState 自己做一个更改，reducer 里面只能接收 state 不能改变 state
- reducer 必须是纯函数
    - 纯函数：如果函数的函数的调用参数相同，则永远返回相同的结果，它不以来于程序执行期间函数外部任何状态或数据改变，必须只依赖其参数
    - 结合 reducer 里面的例子，返回的 newState 必须由传过来的 state 和 action 决定

#### 06
把 UI 部分拆出来，TodoListUI01

#### 07
无状态组件
- 它是一个函数或者方法
- 当一个组件没有什么业务逻辑只有 UI 的时候可以写成无状态组件
- 为什么要写无状态组件，因为比如继承 Component, 它里面有一些默认值，性能没有只有一个方法好

#### 08
redux-thunk
- 这是一个中间件
- 在 store 和 reducer 中间
- reducer 是处理业务逻辑的
- 但是 reducer 里面必须是纯函数
- 有的时候用纯函数不能解决业务逻辑问题，这是后就用到 redux-thunk

#### 09
redux-saga
- 也是一个中间件，功能参考 redux-thunk


