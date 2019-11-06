/**
 * actionCreators.
 * @authors: dawangf (dawangf@sina.com).
 * @createDate: 2019/11/7.
 * @version: 1.0.
 */
import {CHANGE_INPUT, ADD_ITME, DELETE_ITEM} from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITME
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
