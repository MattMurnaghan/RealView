
// Not being used - api is not available server side
// const retrieveData = (input, arr) => {
	
// };

// Open websocket to binance API
// TODO add input parameter coin-pair to append to websocket

// Use below line if connecting to a kline
// 'wss://stream.binance.com:9443/ws/btcusdt@kline_5m'

export const connect_to_binance_socket = (addr) => {
	const socket = new WebSocket(addr);
	console.log('socket opened')
	console.log(socket);

	return socket;
};


// Close a websocket
// TODO add parameter to pass in socket to close

export const close_binance_socket = (socket) => {
	socket.close();
};

export let socketAddresses = {
	btc: 'wss://stream.binance.com:9443/ws/btcusdt@trade',
	eth: 'wss://stream.binance.com:9443/ws/ethusdt@trade',
	sol: 'wss://stream.binance.com:9443/ws/solusdt@trade',
	ltc: 'wss://stream.binance.com:9443/ws/ltcusdt@trade',
	dot: 'wss://stream.binance.com:9443/ws/dotusdt@trade',
	ada: 'wss://stream.binance.com:9443/ws/adausdt@trade'
} 

