// This is the only main file that will run within the script, it will import other function declartions
// defined within the assets/js folder

// console.log('start of index')

// import statements for ui elements
import {open_coin_pairs} from './assets/js/ui.js'
import { open_burger } from './assets/js/ui.js'

// import statements for binance sockets
import {connect_to_binance_socket} from './assets/js/binance_socket.js'
import {close_binance_socket} from './assets/js/binance_socket.js'

// import statements for apex charts
import {kline} from './assets/js/apexCharts.js'
import {trade} from './assets/js/apexCharts.js'
import {socketAddresses} from './assets/js/binance_socket.js' 

document.querySelector('#burger-menu').addEventListener('click', open_burger);
document.querySelector('#select-market__button').addEventListener('click', open_coin_pairs);

console.log(socketAddresses)
let btc_count = 0;
let eth_count = 0;

let btc_socket = connect_to_binance_socket(socketAddresses.btc);
let eth_socket = connect_to_binance_socket(socketAddresses.eth);
let dot_socket = connect_to_binance_socket(socketAddresses.dot);
let ltc_socket = connect_to_binance_socket(socketAddresses.ltc);
let ada_socket = connect_to_binance_socket(socketAddresses.ada);
let sol_socket = connect_to_binance_socket(socketAddresses.sol);


btc_socket.onmessage = function (event) {
    // console.log(btc_count++);
    // console.log(event.data)
    let obj = JSON.parse(event.data);
    console.log(obj.s)
    //  let btc = new trade()

};
eth_socket.onmessage = function (event) {
    // console.log(btc_count++);
    // console.log(event.data)
    let obj = JSON.parse(event.data);
    console.log(obj.s)
    //  let btc = new trade()

};
sol_socket.onmessage = function (event) {
    // console.log(btc_count++);
    // console.log(event.data)
    let obj = JSON.parse(event.data);
    console.log(obj.s)
    //  let btc = new trade()

};
ada_socket.onmessage = function (event) {
    // console.log(btc_count++);
    // console.log(event.data)
    let obj = JSON.parse(event.data);
    console.log(obj.s)
    //  let btc = new trade()

};
ltc_socket.onmessage = function (event) {
    // console.log(btc_count++);
    // console.log(event.data)
    let obj = JSON.parse(event.data);
    console.log(obj.s)
    //  let btc = new trade()

};
dot_socket.onmessage = function (event) {
    // console.log(btc_count++);
    // console.log(event.data)
    let obj = JSON.parse(event.data);
    console.log(obj.s)
    //  let btc = new trade()

};

// eth_socket.onmessage = function (event) {
//     // console.log(eth_count++);
//     console.log(event.data)
//     let obj = JSON.parse(event.data);
//     console.log(obj)
//     //  let btc = new trade()

// };

const myfunc1 = (socket) => {
    close_binance_socket(socket);
    console.log('socket closed');
    // console.log('btc ', count)
}

// const myfunc2 = (socket, count) => {
//     close_binance_socket(socket);
//     console.log('socket closed');
//     // console.log('eth ', count)
// }
console.log('start waiting')

setTimeout(myfunc1, 10000, btc_socket);
setTimeout(myfunc1, 10000, eth_socket);
setTimeout(myfunc1, 10000, ada_socket);
setTimeout(myfunc1, 10000, dot_socket);
setTimeout(myfunc1, 10000, ltc_socket);
setTimeout(myfunc1, 10000, sol_socket);


// donut chart

let apexChart = new ApexCharts(document.querySelector('#donut'), options)
apexChart.render()
