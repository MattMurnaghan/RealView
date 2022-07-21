(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Open coin pairs list to select from prespecified coin pairs and update chart data
const open_coin_pairs = () => {
	console.log('open_coin_pairs')
};

// Open burger menu for mobile display
const open_burger = () => {
	console.log('open burger')
};

// Open websocket to binance API
// TODO add input parameter coin-pair to append to websocket

const connect_to_binance_socket = () => {
	const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_5m');
	console.log(socket);

	socket.onmessage = function (event) {
		console.log(event.data)
	};

	return socket;
};


// Close a websocket
// TODO add parameter to pass in socket to close

const close_binance_socket = (socket) => {
	socket.close();
};


},{}]},{},[1]);
