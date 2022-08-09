// This is the only main file that will run within the script, it will import other function declartions
// defined within the assets/js folder

// console.log('start of index')

// import statements for ui elements
import { openCoinPairs, openBurger } from './assets/js/ui.js';

// import statements for binance sockets
import { socket_addresses, BinanceSocketManager } from './assets/js/binance_socket.js';

// import statements for apex charts
import { Options, Donut } from './assets/js/apexCharts.js';

document.querySelector('#burger-menu').addEventListener('click', openBurger);
document.querySelector('#select-market__button').addEventListener('click', openCoinPairs);

console.log(socket_addresses);
console.log(socket_addresses.btc);

// Decalre instances of BinanceSocketManager for each websocket
// The socket manager class stores the websocket address, the socket itself and the pricedata that is extracted from the 
// binance socket stream
let btc_socket = new BinanceSocketManager(socket_addresses.btc, 'btc');
let eth_socket = new BinanceSocketManager(socket_addresses.eth, 'eth');
let dot_socket = new BinanceSocketManager(socket_addresses.dot, 'dot');
let ltc_socket = new BinanceSocketManager(socket_addresses.ltc, 'ltc');
let ada_socket = new BinanceSocketManager(socket_addresses.ada, 'ada');
let sol_socket = new BinanceSocketManager(socket_addresses.sol, 'sol');

// Calls the connect method for each socket manager to open a connection to each socket address
btc_socket.connect();
eth_socket.connect();
dot_socket.connect();
ltc_socket.connect();
ada_socket.connect();
sol_socket.connect();

// Calls the monitorSocket method for each manager, extracting the trimmed price data from each socket stream
btc_socket.monitorSocket();
eth_socket.monitorSocket();
dot_socket.monitorSocket();
ltc_socket.monitorSocket();
ada_socket.monitorSocket();
sol_socket.monitorSocket();

// const myfunc1 = (socket) => {
//     closeBinanceSocket(socket);
//     console.log('socket closed');
// }

console.log('start waiting');

// donut chart
// let type = 'donut';
// let series = [ 0, 0, 0, 0, 0, 0];
let labels = ['BTC', 'ETH', 'ADA', 'DOT', 'LTC', 'SOL'];

let trade_donut = new Donut(labels);

trade_donut.updateSeries(); 
// trade_donut.getLabels();
trade_donut.renderDonut();

// console.log('after toggle')
// trade_donut.toggleLabels('BTC');

// trade_donut.renderDonut();

document.querySelector('#trade-options__btc').addEventListener('click', () => {
    trade_donut.toggleLabels('BTC');
    trade_donut.renderDonut();
});

document.querySelector('#trade-options__eth').addEventListener('click', () => {
    trade_donut.toggleLabels('ETH');
    trade_donut.renderDonut();
});

document.querySelector('#trade-options__ada').addEventListener('click', () => {
    trade_donut.toggleLabels('ADA');
    trade_donut.renderDonut();
});

document.querySelector('#trade-options__dot').addEventListener('click', () => {
    trade_donut.toggleLabels('DOT');
    trade_donut.renderDonut();
});

document.querySelector('#trade-options__ltc').addEventListener('click', () => {
    trade_donut.toggleLabels('LTC');
    trade_donut.renderDonut();
});

document.querySelector('#trade-options__sol').addEventListener('click', () => {
    trade_donut.toggleLabels('SOL');
    trade_donut.renderDonut();
});


// setInterval(() => {
//     console.log(opt.series);
// }, 3000);


// setInterval(() => {
//     console.log(opt.series)
// }, 3000)





