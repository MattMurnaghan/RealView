export let options = {
	chart: {
	  type: 'donut'
	},
	series: [ 20000, 1400, 500, 200],
    labels: ['BTC', 'ETH', 'TEST1', 'TEST2'],

    dataLabels: {
        enabled: false
    }
  }

//   let klineEx = {
//     openTime: ' ',
//     open: ' ',
//     high: ' ',
//     low: ' ',
//     close: ' ',
//     volume: ' ',
//     closeTime: ' ',
//     quoteAssetVolume: ' ',
//     numberOfTrades: ' ',
//     takerBuyAssetVolume: ' ',
//     takerBuyQuoteAssetVolume: ' '
// };

  export class kline {
    constructor(opentime, closetime, open, high, low, close){
      this.opentime = opentime;
      this.close.time = closetime;
      this.open = open;
      this.high = high;
      this.low = low;
      this.close = close;
    }
  }

  export class trade {
    constructor(time, price){
      this.time = time;
      this.price = price;
    }
  }