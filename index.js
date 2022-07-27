console.log('start of index')

import {open_coin_pairs} from './assets/js/ui.js'
import { open_burger } from './assets/js/ui.js'
import {connect_to_binance_socket} from './assets/js/binance_socket.js'
import {close_binance_socket} from './assets/js/binance_socket.js'

document.querySelector('#burger-menu').addEventListener('click', open_burger)
document.querySelector('#select-market__button').addEventListener('click', open_coin_pairs)


console.log('end of index')