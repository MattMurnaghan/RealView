
// Not being used - api is not available server side
// const retrieveData = (input, arr) => {
	
// };

// Open websocket to binance API
// TODO add input parameter coin-pair to append to websocket

const connect_to_binance_socket = () => {
	const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_5m');
	console.log(socket);

	socket.onmessage = function (event) {
		// console.log(event.data)
		// let time = event.data
		// console.log(typeof(time))
		// console.log(time)
		// let timeObj = JSON.parse(time)
		// console.log(JSON.parse(timeObj))

		// let candlestick = {
		// 	time:
		// }
	};

	return socket;
};


// Close a websocket
// TODO add parameter to pass in socket to close

const close_binance_socket = (socket) => {
	socket.close();
};

