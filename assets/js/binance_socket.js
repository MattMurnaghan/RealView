export class Kline {
    constructor(opentime, closetime, open, high, low, close){
      this.opentime = opentime;
      this.close.time = closetime;
      this.open = open;
      this.high = high;
      this.low = low;
      this.close = close;
    }
  }

  export class Trade {
    constructor(symbol, time, price){
		this.symbol = symbol;
		this.time = time;
		this.price = price;
    }
  }
  
  // Socket manager
  // This class takes an address to a binance websocket as an argument and allows the data from the socket to be trimmed and managed 
  export class BinanceSocketManager{
	// Takes an address to a binance websocket and instantiates storage for the socket itself and the pricedata from the socket 
    constructor(addr, name){
		this.socket_address = addr;
		this.name = name;
		this.socket = null;
		this.price_data = 'no data available yet';
	}

	// Connects the socket to the passed address
	connect(){
		console.log(this.socket_address);
		this.socket = new WebSocket(this.socket_address);
		console.log('socket opened');
		console.log(this.socket);
	};

	// Closes the connection to the socket
	close(){
		this.socket.close();
	}

	// initiates an onmessage event on the socket to constantly update price data
	monitorSocket(){
		let name = this.name;
		this.socket.onmessage = function (event) {
			let trade_object = trimPriceData(event.data);
			sessionStorage.setItem(name, JSON.stringify(trade_object));			
		}
	}

	get data(){
		return this.price_data;
	}

	getName(){
		return this.name;
	}
}

// Trims the payload to contain only the symbol, time and price and returns a new Trade object
function trimPriceData(price_data_payload){
	let obj = JSON.parse(price_data_payload);
	return new Trade(obj.s, unixTimeStampToDateTime(obj.T), obj.p)
}

// Open websocket to binance API
// TODO add input parameter coin-pair to append to websocket

// Use below line if connecting to a kline
// 'wss://stream.binance.com:9443/ws/btcusdt@kline_5m'
export let socket_addresses = {
	btc: 'wss://stream.binance.com:9443/ws/btcusdt@trade',
	eth: 'wss://stream.binance.com:9443/ws/ethusdt@trade',
	sol: 'wss://stream.binance.com:9443/ws/solusdt@trade',
	ltc: 'wss://stream.binance.com:9443/ws/ltcusdt@trade',
	dot: 'wss://stream.binance.com:9443/ws/dotusdt@trade',
	ada: 'wss://stream.binance.com:9443/ws/adausdt@trade'
} 

// Converts a unixtimestamp to a date object,  can also be used to output a formatted string for just the time without the date
const unixTimeStampToDateTime = (stamp) => {
	let date = new Date(stamp); 
	return date;
  }
