# RealView
A tool for visualizing real-time financial data from different sources.
## Learning outcomes
* Learn how to capture real-time data from the Binance API
* Learn how to display data using javascript libraries
* Build a functional website to be able to display more than three cryptocurrency live prices on different time scales set by the user.
* Change the display type (line charts vs candlestick charts)

## Node package manager (npm)
I am planning on using npm to manage my dependencies and packages for this project. 
Npm is an industry-standard technology required to install different node packages. Node packages are written in the Node environment built on the V8 Javascript runtime environment created by google.

## Node Modules
The list of node modules I used in this project is shown below:
* Jquery
    - For manipulating the DOM
* wscat
    - For connecting to WebSockets and streaming data from the Binance API
* Lightweight charts
    - For displaying financial information in chart form 

## The Binance API
I used the Binance API to connect to their official WebSocket stream. This allowed me to capture live data about the Binance marketplace.
See the offical documentation [here](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md).

The main endpoint used to connect to the stream: 
- wss://stream.binance.com:9443

To read the data from the Bitcoin/USDT stream, you can connect using this stream:
- wss://stream.binance.com:9443/ws/btcusdt@trade

Some output from the stream:
- {"e":"trade","E":1657675597736,"s":"BTCUSDT","t":1458726751,"p":"19385.08000000","q":"0.01262000","b":11550945399,"a":11550945402,"T":1657675597735,"m":true,"M":true}
## References

[binance API playlist](https://www.youtube.com/playlist?list=PLvzuUVysUFOuB1kJQ3S2G-nB7_nHhD7Ay)