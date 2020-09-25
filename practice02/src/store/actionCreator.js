import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_MY_LIST } from "./actionTypes";
// import axios from "axios";
// GET_LIST


export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
});

export const addItemAction = (value) => ({
    type: ADD_ITEM,
    value
});

export const deleteItemAction = (value) => ({
    type: DELETE_ITEM,
    value
});

// export const getListAction = (data) => ({
//     type: GET_LIST,
//     data
// });

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get("url").then(res => {
//             const data = res.data;
//             const action = getListAction(data);
//             dispatch(action);
//         }); 
//     }
// }

export const getMyListAction = () => ({
    type: GET_MY_LIST
})