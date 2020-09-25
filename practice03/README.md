用 react-redux 重写一遍这个练习

#### 01
- 之前我们用 `store.getState()` 获得 `store` 里面的值
- 现在用 `Provider` 绑定 `store`, 在 `Provider` 里面包裹的值就可有使用 `store`
- 可以使用 `store` 的前提是，在组件里面进行链接，用 `connect`
把 state 转成 store
```
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(stateToProps, null)(TodoLost);
```