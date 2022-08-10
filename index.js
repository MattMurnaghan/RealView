// This is the only main file that will run within the script, it will import other function declartions
// defined within the assets/js folder

// import statements for ui elements
import { openCoinPairs, openBurger } from './assets/js/ui.js';

// import statements for binance sockets
import { socket_addresses, BinanceSocketManager } from './assets/js/binance_socket.js';

// import statements for apex charts
import { Donut } from './assets/js/apexCharts.js';

document.querySelector('#burger-menu').addEventListener('click', openBurger);
// document.querySelector('#select-market__button').addEventListener('click', openCoinPairs);


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

let labels = ['BTC', 'ETH', 'ADA', 'DOT', 'LTC', 'SOL'];

let trade_donut = new Donut(labels);

trade_donut.updateSeries(); 
trade_donut.toggleDataLabels();
trade_donut.renderDonut();

let btc_trade_button = document.querySelector('#trade-options__btc');
let eth_trade_button = document.querySelector('#trade-options__eth');
let ada_trade_button = document.querySelector('#trade-options__ada');
let dot_trade_button = document.querySelector('#trade-options__dot');
let ltc_trade_button = document.querySelector('#trade-options__ltc');
let sol_trade_button = document.querySelector('#trade-options__sol');

let update_price_button = document.querySelector('#update-price');

update_price_button.addEventListener('click', () => {
    trade_donut.updateSeries(); 
    btc_trade_button.classList.remove('clicked');
    dot_trade_button.classList.remove('clicked');
    eth_trade_button.classList.remove('clicked');
    ada_trade_button.classList.remove('clicked');
    ltc_trade_button.classList.remove('clicked');
    sol_trade_button.classList.remove('clicked');

    trade_donut.renderDonut();
});

btc_trade_button.addEventListener('click', () => {
    btc_trade_button.classList.toggle('clicked');
    trade_donut.toggleLabels('BTC');
    trade_donut.renderDonut();
});

eth_trade_button.addEventListener('click', () => {
    eth_trade_button.classList.toggle('clicked');
    trade_donut.toggleLabels('ETH');
    trade_donut.renderDonut();
});

ada_trade_button.addEventListener('click', () => {
    ada_trade_button.classList.toggle('clicked');
    trade_donut.toggleLabels('ADA');
    trade_donut.renderDonut();
});

dot_trade_button.addEventListener('click', () => {
    dot_trade_button.classList.toggle('clicked');
    trade_donut.toggleLabels('DOT');
    trade_donut.renderDonut();
});

ltc_trade_button.addEventListener('click', () => {
    ltc_trade_button.classList.toggle('clicked');
    trade_donut.toggleLabels('LTC');
    trade_donut.renderDonut();
});

sol_trade_button.addEventListener('click', () => {
    sol_trade_button.classList.toggle('clicked');
    trade_donut.toggleLabels('SOL');
    trade_donut.renderDonut();
});





