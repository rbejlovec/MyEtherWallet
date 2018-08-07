import store from 'store'
import overide from '../helpers/web3-overide/web3-overide-mew'

const ADD_NOTIFICATION = function (state, newNotif) {
  store.set('notifications', newNotif)
}

const CHANGE_PAGE_STATE = function (state, arr) {
  state.pageStates[arr[0]][arr[1]] = arr[2]
  store.set(arr[1], arr[2])
}

const CHECK_IF_ONLINE = function (state) {
  state.online =
    window.location.protocol === 'http:' ||
    window.location.protocol === 'https:'
}

const CLEAR_WALLET = function (state) {
  state.wallet = null
  state.account = {balance: 0}
}

const DECRYPT_WALLET = function (state, wallet) {
  state.wallet = wallet
  const web3 = overide(state.web3, state.wallet)
  state.web3 = web3
}

const INIT_STATES = function (state, stateObj) {
  Object.keys(state).forEach(key => {
    state[key] = stateObj[key]
  })
}

const SET_ACCOUNT_BALANCE = function (state, balance) {
  state.account.balance = balance
}

const SET_GAS_PRICE = function (state, val) {
  state.gasPrice = val
  store.set('gasPrice', val)
}

const SET_WEB3_INSTANCE = function (state, web3) {
  state.web3 = web3
}

const SWITCH_NETWORK = function (state, networkObj) {
  state.network = networkObj
  store.set('network', networkObj)
}

const UPDATE_NOTIFICATION = function (state, newNotif) {
  state.notifications = newNotif
  store.set('notifications', newNotif)
}

export default {
  ADD_NOTIFICATION,
  CHANGE_PAGE_STATE,
  CHECK_IF_ONLINE,
  CLEAR_WALLET,
  DECRYPT_WALLET,
  INIT_STATES,
  SET_ACCOUNT_BALANCE,
  SET_GAS_PRICE,
  SET_WEB3_INSTANCE,
  SWITCH_NETWORK,
  UPDATE_NOTIFICATION
}
