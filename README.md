# **RealView**
A tool for visualizing real-time financial data from different sources.
## **Learning outcomes**
* Learn how to capture real-time data from the Binance API
* Learn how to display data using javascript libraries
* Build a functional website to be able to display more than three cryptocurrency live prices on different time scales set by the user.
* Change the display type (line charts vs candlestick charts)
* Create a pie chart showing the price relationships between different currencies

## **Node package manager (npm)**
I am planning on using npm to manage my dependencies and packages for this project. 
Npm is an industry-standard technology required to install different node packages. Node packages are written in the Node environment built on the V8 Javascript runtime environment created by google.

## **Node Modules**
The list of node modules I used in this project is shown below:
* [Jquery](https://jquery.com/)
    - For manipulating the DOM
* [wscat](https://www.npmjs.com/package/wscat)
    - For connecting to WebSockets and streaming data from the Binance API
* [Lightweight charts](https://www.tradingview.com/lightweight-charts/)
    - For displaying financial information in chart form 

## **The Binance API**
I used the Binance API to connect to their official WebSocket stream. This allowed me to capture live data about the Binance marketplace.
See the offical documentation [here](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md).

The main endpoint used to connect to the stream: 
- wss://stream.binance.com:9443

The stream outputs the data in the form of JSON objects using [ "key": value ] pairs:

### **Trade streams**

To read the data from the Bitcoin/USDT trade stream, you can connect using this stream:
- wss://stream.binance.com:9443/ws/btcusdt@trade

        {
            
            "e": "trade",           //Lists the type of data
            "E": 1657675597736,     //Lists the event time with a unix time-stamp
            "s": "BTCUSDT",         //Lists the currency pair being traded
            "t": 1458726751,        //Lists the trade ID
            "p": "19385.08000000",  //Lists the price of the trade
            "q": "0.01262000",      //Lists the quantity of the currency that was traded
            "b": 11550945399,       //Lists the buyer order ID
            "a": 11550945402,       //Lists the seller order ID
            "T": 1657675597735,     //Lists the time the trade took place
            "m": true,              //Is the buyer a market buyer?
            "M": true               //Ignore
        }

These JSON objects can be used to store data points and their relational aspects. In the above object, we have a currency pair,  a time that it took place and a price that it was traded at. this data can then be fed into a graphing tool to create a visual representation of the time/price relationship of the BTC/USDT pair.

### **Kline/Candlestick streams**

To read the data from the Bitcoin/USDT candlestick or kline stream, you can connect using this stream:
- wss://stream.binance.com:9443/ws/btcusdt@kline_5m

This will output a candlestick stream of trade data, including the opening price, closing price, peak price and lowest price.

        {
            "e": "kline",                   // Data type
            "E": 1657675754011,             // Event time
            "s": "BTCUSDT",                 // Symbol
            "k": {  
                "t": 1657675500000,         // Kline start time with unix time-stamp
                "T": 1657675799999,         // Kline close time with unix time-stamp
                "s": "BTCUSDT",             // Symbol
                "i": "5m",                  // Interval
                "f": 1458722581,            // First trade ID
                "L": 1458731181,            // Last trade ID
                "o": "19411.85000000",      // Open price
                "c": "19405.05000000",      // Close price
                "h": "19415.00000000",      // High price
                "l": "19378.37000000",      // Low price
                "v": "297.07434000",        // Base asset volume
                "n": 8601,                  // Number of trades
                "x": false,                 // Is this kline closed?
                "q": "5762128.25577910",    // Quote asset volume
                "V": "138.36981000",        // Taker buy base asset volume
                "Q": "2683904.79370620",    // Taker buy quote asset volume
                "B": "0"                    // Ignore
            }
        }

This kind of data is used to create candlestick charts, specifically used to carry out a detailed analysis of financial markets during trade hours over a given time interval.
## **References**

[Box shadows](https://www.youtube.com/watch?v=Yon4l3MUBGY)

[Dropdown burger menu](https://www.youtube.com/watch?v=pVpW0SPmN7k)

[binance API playlist](https://www.youtube.com/playlist?list=PLvzuUVysUFOuB1kJQ3S2G-nB7_nHhD7Ay)