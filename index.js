// This is the only main file that will run within the script, it will import other function declartions
// defined within the assets/js folder

// console.log('start of index')

// import statements for ui elements
import { openCoinPairs, openBurger } from './assets/js/ui.js';

// import statements for binance sockets
import { socket_addresses, BinanceSocketManager } from './assets/js/binance_socket.js';

// import statements for apex charts
import { options } from './assets/js/apexCharts.js';

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
let type = 'donut';
let series = [ 0, 0, 0, 0, 0, 0];
let labels = ['BTC', 'ETH', 'ADA', 'DOT', 'LTC', 'SOL'];
let enabled = false;

let opt = new options(type, series, labels, enabled);
let apexChart = new ApexCharts(document.querySelector('#donut'), opt);
apexChart.render();

setInterval(() => {
    let btc_object = JSON.parse(sessionStorage.getItem('btc'));
    let eth_object = JSON.parse(sessionStorage.getItem('eth'));
    let ada_object = JSON.parse(sessionStorage.getItem('ada'));
    let dot_object = JSON.parse(sessionStorage.getItem('dot'));
    let ltc_object = JSON.parse(sessionStorage.getItem('ltc'));
    let sol_object = JSON.parse(sessionStorage.getItem('sol'));
    
    opt.series = [
        parseFloat(btc_object.price)*0.01,
        parseFloat(eth_object.price),
        parseFloat(ada_object.price),
        parseFloat(dot_object.price),
        parseFloat(ltc_object.price),
        parseFloat(sol_object.price)
    ]
}, 1000);

// setInterval(() => {
//     console.log(opt.series);
// }, 3000);


// setInterval(() => {
//     console.log(opt.series)
// }, 3000)

document.querySelector('#trade-options_btc').addEventListener('click', updateDonut);



// const dataManager = new DataManager();


// let opt = new options;
// console.log(opt)
