/**
 * reducer.
 * @authors: dawangf (dawangf@sina.com).
 * @createDate: 2019/11/6.
 * @version: 1.0.
 */
import { CHANGE_INPUT, ADD_ITME, DELETE_ITEM} from './actionTypes'

const defaultState = {
  inputValue: 'Write Plances',
  list: [
    '8电器厂',
    '9点上班',
    '10点叫餐'
  ]
}
export default (state = defaultState, action) => {
  console.log('state:', state, action)
  // Reducer里只能接收state，不能改变state
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT:
      newState.inputValue = action.value
      return newState
      break
    case ADD_ITME:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
      break
    case DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
      break
  }
  return state
}
