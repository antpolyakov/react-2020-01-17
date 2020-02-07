import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {dataManage} from './middlewares/data-manage'

const enhancer = applyMiddleware(logging, dataManage)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
