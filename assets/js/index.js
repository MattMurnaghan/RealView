// import { createChart } from 'lightweight-charts';
// import charts from 'lightweight-charts';
// var charting = require('lightweight-charts')



//! Cant use nodejs module with this file type, check with guido

// const chart = createChart(document.querySelector('#main-chart'), { width: 300, height: 300 });
// const lineSeries = chart.addLineSeries();
// lineSeries.setData([
//     { time: '2019-04-11', value: 80.01 },
//     { time: '2019-04-12', value: 96.63 },
//     { time: '2019-04-13', value: 76.64 },
//     { time: '2019-04-14', value: 81.89 },
//     { time: '2019-04-15', value: 74.43 },
//     { time: '2019-04-16', value: 80.01 },
//     { time: '2019-04-17', value: 96.63 },
//     { time: '2019-04-18', value: 76.64 },
//     { time: '2019-04-19', value: 81.89 },
//     { time: '2019-04-20', value: 74.43 },
// ]);

// Use CDN link instead

// const chart = LightweightCharts.createChart(document.querySelector('#chart-container__main-chart'), { width: 300, height: 300 });
// const lineSeries = chart.addLineSeries();
// lineSeries.setData([
//     { time: '2019-04-11', value: 80.01 },
//     { time: '2019-04-12', value: 96.63 },
//     { time: '2019-04-13', value: 76.64 },
//     { time: '2019-04-14', value: 81.89 },
//     { time: '2019-04-15', value: 74.43 },
//     { time: '2019-04-16', value: 80.01 },
//     { time: '2019-04-17', value: 96.63 },
//     { time: '2019-04-18', value: 76.64 },
//     { time: '2019-04-19', value: 81.89 },
//     { time: '2019-04-20', value: 74.43 },
// ]);

// Real time emulation example provided by lightweight charts

// var chart = LightweightCharts.createChart(document.querySelector('#chart-container__main-chart'), {
// 	width: 300,
//   height: 300,
// 	crosshair: {
// 		mode: LightweightCharts.CrosshairMode.Normal,
// 	},
// });

// var candleSeries = chart.addCandlestickSeries();

// var data = [
// 	{ time: '2018-10-19', open: 54.62, high: 55.50, low: 54.52, close: 54.90 },
// 	{ time: '2018-10-22', open: 55.08, high: 55.27, low: 54.61, close: 54.98 },
// 	{ time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21 },
// 	{ time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42 },
// 	{ time: '2018-10-25', open: 57.46, high: 57.63, low: 56.17, close: 56.43 },
// 	{ time: '2018-10-26', open: 56.26, high: 56.62, low: 55.19, close: 55.51 },
// 	{ time: '2018-10-29', open: 55.81, high: 57.15, low: 55.72, close: 56.48 },
// 	{ time: '2018-10-30', open: 56.92, high: 58.80, low: 56.92, close: 58.18 },
// 	{ time: '2018-10-31', open: 58.32, high: 58.32, low: 56.76, close: 57.09 },
// 	{ time: '2018-11-01', open: 56.98, high: 57.28, low: 55.55, close: 56.05 },
// 	{ time: '2018-11-02', open: 56.34, high: 57.08, low: 55.92, close: 56.63 },
// 	{ time: '2018-11-05', open: 56.51, high: 57.45, low: 56.51, close: 57.21 },
// 	{ time: '2018-11-06', open: 57.02, high: 57.35, low: 56.65, close: 57.21 },
// 	{ time: '2018-11-07', open: 57.55, high: 57.78, low: 57.03, close: 57.65 },
// 	{ time: '2018-11-08', open: 57.70, high: 58.44, low: 57.66, close: 58.27 },
// 	{ time: '2018-11-09', open: 58.32, high: 59.20, low: 57.94, close: 58.46 },
// 	{ time: '2018-11-12', open: 58.84, high: 59.40, low: 58.54, close: 58.72 },
// 	{ time: '2018-11-13', open: 59.09, high: 59.14, low: 58.32, close: 58.66 },
// 	{ time: '2018-11-14', open: 59.13, high: 59.32, low: 58.41, close: 58.94 },
// 	{ time: '2018-11-15', open: 58.85, high: 59.09, low: 58.45, close: 59.08 },
// 	{ time: '2018-11-16', open: 59.06, high: 60.39, low: 58.91, close: 60.21 },
// 	{ time: '2018-11-19', open: 60.25, high: 61.32, low: 60.18, close: 60.62 },
// 	{ time: '2018-11-20', open: 61.03, high: 61.58, low: 59.17, close: 59.46 },
// 	{ time: '2018-11-21', open: 59.26, high: 59.90, low: 58.88, close: 59.16 },
// 	{ time: '2018-11-23', open: 58.86, high: 59.00, low: 58.29, close: 58.64 },
// 	{ time: '2018-11-26', open: 58.64, high: 59.51, low: 58.31, close: 59.17 },
// 	{ time: '2018-11-27', open: 59.21, high: 60.70, low: 59.18, close: 60.65 },
// 	{ time: '2018-11-28', open: 60.70, high: 60.73, low: 59.64, close: 60.06 },
// 	{ time: '2018-11-29', open: 59.42, high: 59.79, low: 59.26, close: 59.45 },
// 	{ time: '2018-11-30', open: 59.57, high: 60.37, low: 59.48, close: 60.30 },
// 	{ time: '2018-12-03', open: 59.50, high: 59.75, low: 57.69, close: 58.16 },
// 	{ time: '2018-12-04', open: 58.10, high: 59.40, low: 57.96, close: 58.09 },
// 	{ time: '2018-12-06', open: 58.18, high: 58.64, low: 57.16, close: 58.08 },
// 	{ time: '2018-12-07', open: 57.91, high: 58.43, low: 57.34, close: 57.68 },
// 	{ time: '2018-12-10', open: 57.80, high: 58.37, low: 56.87, close: 58.27 },
// 	{ time: '2018-12-11', open: 58.77, high: 59.40, low: 58.63, close: 58.85 },
// 	{ time: '2018-12-12', open: 57.79, high: 58.19, low: 57.23, close: 57.25 },
// 	{ time: '2018-12-13', open: 57.00, high: 57.50, low: 56.81, close: 57.09 },
// 	{ time: '2018-12-14', open: 56.95, high: 57.50, low: 56.75, close: 57.08 },
// 	{ time: '2018-12-17', open: 57.06, high: 57.31, low: 55.53, close: 55.95 },
// 	{ time: '2018-12-18', open: 55.94, high: 56.69, low: 55.31, close: 55.65 },
// 	{ time: '2018-12-19', open: 55.72, high: 56.92, low: 55.50, close: 55.86 },
// 	{ time: '2018-12-20', open: 55.92, high: 56.01, low: 54.26, close: 55.07 },
// 	{ time: '2018-12-21', open: 54.84, high: 56.53, low: 54.24, close: 54.92 },
// 	{ time: '2018-12-24', open: 54.68, high: 55.04, low: 52.94, close: 53.05 },
// 	{ time: '2018-12-26', open: 53.23, high: 54.47, low: 52.40, close: 54.44 },
// 	{ time: '2018-12-27', open: 54.31, high: 55.17, low: 53.35, close: 55.15 },
// 	{ time: '2018-12-28', open: 55.37, high: 55.86, low: 54.90, close: 55.27 },
// 	{ time: '2018-12-31', open: 55.53, high: 56.23, low: 55.07, close: 56.22 },
// 	{ time: '2019-01-02', open: 56.16, high: 56.16, low: 55.28, close: 56.02 },
// 	{ time: '2019-01-03', open: 56.30, high: 56.99, low: 56.06, close: 56.22 },
// 	{ time: '2019-01-04', open: 56.49, high: 56.89, low: 55.95, close: 56.36 },
// 	{ time: '2019-01-07', open: 56.76, high: 57.26, low: 56.55, close: 56.72 },
// 	{ time: '2019-01-08', open: 57.27, high: 58.69, low: 57.05, close: 58.38 },
// 	{ time: '2019-01-09', open: 57.68, high: 57.72, low: 56.85, close: 57.05 },
// 	{ time: '2019-01-10', open: 57.29, high: 57.70, low: 56.87, close: 57.60 },
// 	{ time: '2019-01-11', open: 57.84, high: 58.26, low: 57.42, close: 58.02 },
// 	{ time: '2019-01-14', open: 57.83, high: 58.15, low: 57.67, close: 58.03 },
// 	{ time: '2019-01-15', open: 57.74, high: 58.29, low: 57.58, close: 58.10 },
// 	{ time: '2019-01-16', open: 57.93, high: 57.93, low: 57.00, close: 57.08 },
// 	{ time: '2019-01-17', open: 57.16, high: 57.40, low: 56.21, close: 56.83 },
// 	{ time: '2019-01-18', open: 56.92, high: 57.47, low: 56.84, close: 57.09 },
// 	{ time: '2019-01-22', open: 57.23, high: 57.39, low: 56.40, close: 56.99 },
// 	{ time: '2019-01-23', open: 56.98, high: 57.87, low: 56.93, close: 57.76 },
// 	{ time: '2019-01-24', open: 57.61, high: 57.65, low: 56.50, close: 57.07 },
// 	{ time: '2019-01-25', open: 57.18, high: 57.47, low: 56.23, close: 56.40 },
// 	{ time: '2019-01-28', open: 56.12, high: 56.22, low: 54.80, close: 55.07 },
// 	{ time: '2019-01-29', open: 53.62, high: 54.30, low: 52.97, close: 53.28 },
// 	{ time: '2019-01-30', open: 53.10, high: 54.02, low: 52.28, close: 54.00 },
// 	{ time: '2019-01-31', open: 54.05, high: 55.19, low: 53.53, close: 55.06 },
// 	{ time: '2019-02-01', open: 55.21, high: 55.30, low: 54.47, close: 54.55 },
// 	{ time: '2019-02-04', open: 54.60, high: 54.69, low: 53.67, close: 54.04 },
// 	{ time: '2019-02-05', open: 54.10, high: 54.34, low: 53.61, close: 54.14 },
// 	{ time: '2019-02-06', open: 54.11, high: 54.37, low: 53.68, close: 53.79 },
// 	{ time: '2019-02-07', open: 53.61, high: 53.73, low: 53.02, close: 53.57 },
// 	{ time: '2019-02-08', open: 53.36, high: 53.96, low: 53.30, close: 53.95 },
// 	{ time: '2019-02-11', open: 54.13, high: 54.37, low: 53.86, close: 54.05 },
// 	{ time: '2019-02-12', open: 54.45, high: 54.77, low: 54.19, close: 54.42 },
// 	{ time: '2019-02-13', open: 54.35, high: 54.77, low: 54.28, close: 54.48 },
// 	{ time: '2019-02-14', open: 54.38, high: 54.52, low: 53.95, close: 54.03 },
// 	{ time: '2019-02-15', open: 54.48, high: 55.19, low: 54.32, close: 55.16 },
// 	{ time: '2019-02-19', open: 55.06, high: 55.66, low: 54.82, close: 55.44 },
// 	{ time: '2019-02-20', open: 55.37, high: 55.91, low: 55.24, close: 55.76 },
// 	{ time: '2019-02-21', open: 55.55, high: 56.72, low: 55.46, close: 56.15 },
// 	{ time: '2019-02-22', open: 56.43, high: 57.13, low: 56.40, close: 56.92 },
// 	{ time: '2019-02-25', open: 57.00, high: 57.27, low: 56.55, close: 56.78 },
// 	{ time: '2019-02-26', open: 56.82, high: 57.09, low: 56.46, close: 56.64 },
// 	{ time: '2019-02-27', open: 56.55, high: 56.73, low: 56.35, close: 56.72 },
// 	{ time: '2019-02-28', open: 56.74, high: 57.61, low: 56.72, close: 56.92 },
// 	{ time: '2019-03-01', open: 57.02, high: 57.15, low: 56.35, close: 56.96 },
// 	{ time: '2019-03-04', open: 57.15, high: 57.34, low: 55.66, close: 56.24 },
// 	{ time: '2019-03-05', open: 56.09, high: 56.17, low: 55.51, close: 56.08 },
// 	{ time: '2019-03-06', open: 56.19, high: 56.42, low: 55.45, close: 55.68 },
// 	{ time: '2019-03-07', open: 55.76, high: 56.40, low: 55.72, close: 56.30 },
// 	{ time: '2019-03-08', open: 56.36, high: 56.68, low: 56.00, close: 56.53 },
// 	{ time: '2019-03-11', open: 56.76, high: 57.62, low: 56.75, close: 57.58 },
// 	{ time: '2019-03-12', open: 57.63, high: 58.11, low: 57.36, close: 57.43 },
// 	{ time: '2019-03-13', open: 57.37, high: 57.74, low: 57.34, close: 57.66 },
// 	{ time: '2019-03-14', open: 57.71, high: 58.09, low: 57.51, close: 57.95 },
// 	{ time: '2019-03-15', open: 58.04, high: 58.51, low: 57.93, close: 58.39 },
// 	{ time: '2019-03-18', open: 58.27, high: 58.32, low: 57.56, close: 58.07 },
// 	{ time: '2019-03-19', open: 58.10, high: 58.20, low: 57.31, close: 57.50 },
// 	{ time: '2019-03-20', open: 57.51, high: 58.05, low: 57.11, close: 57.67 },
// 	{ time: '2019-03-21', open: 57.58, high: 58.49, low: 57.57, close: 58.29 },
// 	{ time: '2019-03-22', open: 58.16, high: 60.00, low: 58.13, close: 59.76 },
// 	{ time: '2019-03-25', open: 59.63, high: 60.19, low: 59.53, close: 60.08 },
// 	{ time: '2019-03-26', open: 60.30, high: 60.69, low: 60.17, close: 60.63 },
// 	{ time: '2019-03-27', open: 60.56, high: 61.19, low: 60.48, close: 60.88 },
// 	{ time: '2019-03-28', open: 60.88, high: 60.89, low: 58.44, close: 59.08 },
// 	{ time: '2019-03-29', open: 59.20, high: 59.27, low: 58.32, close: 59.13 },
// 	{ time: '2019-04-01', open: 59.39, high: 59.41, low: 58.79, close: 59.09 },
// 	{ time: '2019-04-02', open: 59.22, high: 59.23, low: 58.34, close: 58.53 },
// 	{ time: '2019-04-03', open: 58.78, high: 59.07, low: 58.41, close: 58.87 },
// 	{ time: '2019-04-04', open: 58.84, high: 59.10, low: 58.77, close: 58.99 },
// 	{ time: '2019-04-05', open: 59.02, high: 59.09, low: 58.82, close: 59.09 },
// 	{ time: '2019-04-08', open: 59.02, high: 59.13, low: 58.72, close: 59.13 },
// 	{ time: '2019-04-09', open: 58.37, high: 58.56, low: 58.04, close: 58.40 },
// 	{ time: '2019-04-10', open: 58.40, high: 58.70, low: 58.36, close: 58.61 },
// 	{ time: '2019-04-11', open: 58.65, high: 58.73, low: 58.20, close: 58.56 },
// 	{ time: '2019-04-12', open: 58.75, high: 58.79, low: 58.52, close: 58.74 },
// 	{ time: '2019-04-15', open: 58.91, high: 58.95, low: 58.59, close: 58.71 },
// 	{ time: '2019-04-16', open: 58.79, high: 58.98, low: 58.66, close: 58.79 },
// 	{ time: '2019-04-17', open: 58.40, high: 58.46, low: 57.64, close: 57.78 },
// 	{ time: '2019-04-18', open: 57.51, high: 58.20, low: 57.28, close: 58.04 },
// 	{ time: '2019-04-22', open: 58.14, high: 58.49, low: 57.89, close: 58.37 },
// 	{ time: '2019-04-23', open: 57.62, high: 57.72, low: 56.30, close: 57.15 },
// 	{ time: '2019-04-24', open: 57.34, high: 57.57, low: 56.73, close: 57.08 },
// 	{ time: '2019-04-25', open: 56.82, high: 56.90, low: 55.75, close: 55.85 },
// 	{ time: '2019-04-26', open: 56.06, high: 56.81, low: 55.83, close: 56.58 },
// 	{ time: '2019-04-29', open: 56.75, high: 57.17, low: 56.71, close: 56.84 },
// 	{ time: '2019-04-30', open: 56.99, high: 57.45, low: 56.76, close: 57.19 },
// 	{ time: '2019-05-01', open: 57.23, high: 57.30, low: 56.52, close: 56.52 },
// 	{ time: '2019-05-02', open: 56.81, high: 58.23, low: 56.68, close: 56.99 },
// 	{ time: '2019-05-03', open: 57.15, high: 57.36, low: 56.87, close: 57.24 },
// 	{ time: '2019-05-06', open: 56.83, high: 57.09, low: 56.74, close: 56.91 },
// 	{ time: '2019-05-07', open: 56.69, high: 56.81, low: 56.33, close: 56.63 },
// 	{ time: '2019-05-08', open: 56.66, high: 56.70, low: 56.25, close: 56.38 },
// 	{ time: '2019-05-09', open: 56.12, high: 56.56, low: 55.93, close: 56.48 },
// 	{ time: '2019-05-10', open: 56.49, high: 57.04, low: 56.26, close: 56.91 },
// 	{ time: '2019-05-13', open: 56.72, high: 57.34, low: 56.66, close: 56.75 },
// 	{ time: '2019-05-14', open: 56.76, high: 57.19, low: 56.50, close: 56.55 },
// 	{ time: '2019-05-15', open: 56.51, high: 56.84, low: 56.17, close: 56.81 },
// 	{ time: '2019-05-16', open: 57.00, high: 57.80, low: 56.82, close: 57.38 },
// 	{ time: '2019-05-17', open: 57.06, high: 58.48, low: 57.01, close: 58.09 },
// 	{ time: '2019-05-20', open: 59.15, high: 60.54, low: 58.00, close: 59.01 },
// 	{ time: '2019-05-21', open: 59.10, high: 59.63, low: 58.76, close: 59.50 },
// 	{ time: '2019-05-22', open: 59.09, high: 59.37, low: 58.96, close: 59.25 },
// 	{ time: '2019-05-23', open: 59.00, high: 59.27, low: 58.54, close: 58.87 },
// 	{ time: '2019-05-24', open: 59.07, high: 59.36, low: 58.67, close: 59.32 },
// 	{ time: '2019-05-28', open: 59.21, high: 59.66, low: 59.02, close: 59.57 },
// ];

// candleSeries.setData(data);

// var lastClose = data[data.length - 1].close;
// var lastIndex = data.length - 1;

// var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
// var targetPrice = getRandomPrice();

// var currentIndex = lastIndex + 1;
// var currentBusinessDay = { day: 29, month: 5, year: 2019 };
// var ticksInCurrentBar = 0;
// var currentBar = {
// 	open: null,
// 	high: null,
// 	low: null,
// 	close: null,
// 	time: currentBusinessDay,
// };

// function mergeTickToBar(price) {
// 	if (currentBar.open === null) {
// 		currentBar.open = price;
// 		currentBar.high = price;
// 		currentBar.low = price;
// 		currentBar.close = price;
// 	} else {
// 		currentBar.close = price;
// 		currentBar.high = Math.max(currentBar.high, price);
// 		currentBar.low = Math.min(currentBar.low, price);
// 	}
// 	candleSeries.update(currentBar);
// }

// function reset() {
// 	candleSeries.setData(data);
// 	lastClose = data[data.length - 1].close;
// 	lastIndex = data.length - 1;

// 	targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
// 	targetPrice = getRandomPrice();

// 	currentIndex = lastIndex + 1;
// 	currentBusinessDay = { day: 29, month: 5, year: 2019 };
// 	ticksInCurrentBar = 0;
// }

// function getRandomPrice() {
// 	return 10 + Math.round(Math.random() * 10000) / 100;
// }

// function nextBusinessDay(time) {
// 	var d = new Date();
// 	d.setUTCFullYear(time.year);
// 	d.setUTCMonth(time.month - 1);
// 	d.setUTCDate(time.day + 1);
// 	d.setUTCHours(0, 0, 0, 0);
// 	return {
// 		year: d.getUTCFullYear(),
// 		month: d.getUTCMonth() + 1,
// 		day: d.getUTCDate(),
// 	};
// }

// setInterval(function() {
// 	var deltaY = targetPrice - lastClose;
// 	var deltaX = targetIndex - lastIndex;
// 	var angle = deltaY / deltaX;
// 	var basePrice = lastClose + (currentIndex - lastIndex) * angle;
// 	var noise = (0.1 - Math.random() * 0.2) + 1.0;
// 	var noisedPrice = basePrice * noise;
// 	mergeTickToBar(noisedPrice);
// 	if (++ticksInCurrentBar === 5) {
// 		// move to next bar
// 		currentIndex++;
// 		currentBusinessDay = nextBusinessDay(currentBusinessDay);
// 		currentBar = {
// 			open: null,
// 			high: null,
// 			low: null,
// 			close: null,
// 			time: currentBusinessDay,
// 		};
// 		ticksInCurrentBar = 0;
// 		if (currentIndex === 5000) {
// 			reset();
// 			return;
// 		}
// 		if (currentIndex === targetIndex) {
// 			// change trend
// 			lastClose = noisedPrice;
// 			lastIndex = currentIndex;
// 			targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
// 			targetPrice = getRandomPrice();
// 		}
// 	}
// }, 200);


// Static Kline example 

const chart = LightweightCharts.createChart(document.querySelector('#chart-container__main-chart'), {
	width: 300,
  height: 300,
	layout: {
		backgroundColor: '#fff',
		textColor: 'rgba(57, 136, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
});

const candleSeries = chart.addCandlestickSeries({
  upColor: 'rgba(57, 136, 255, 1)',
  downColor: 'rgba(255, 255, 255, 1)',
  borderDownColor: 'rgba(57, 136, 255, 1)',
  borderUpColor: 'rgba(57, 136, 255, 1)',
  wickDownColor: 'rgba(57, 136, 255, 1)',
  wickUpColor: 'rgba(57, 136, 255, 1)',
});

candleSeries.setData([
	{ time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
	{ time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
	{ time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
	{ time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
	{ time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
	{ time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
	{ time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
	{ time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
	{ time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
	{ time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
	{ time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
	{ time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 },
	{ time: '2018-11-06', open: 181.93, high: 182.65, low: 180.05, close: 182.01 },
	{ time: '2018-11-07', open: 183.79, high: 187.68, low: 182.06, close: 187.23 },
	{ time: '2018-11-08', open: 187.13, high: 188.69, low: 185.72, close: 188.00 },
	{ time: '2018-11-09', open: 188.32, high: 188.48, low: 184.96, close: 185.99 },
	{ time: '2018-11-12', open: 185.23, high: 186.95, low: 179.02, close: 179.43 },
	{ time: '2018-11-13', open: 177.30, high: 181.62, low: 172.85, close: 179.00 },
	{ time: '2018-11-14', open: 182.61, high: 182.90, low: 179.15, close: 179.90 },
	{ time: '2018-11-15', open: 179.01, high: 179.67, low: 173.61, close: 177.36 },
	{ time: '2018-11-16', open: 173.99, high: 177.60, low: 173.51, close: 177.02 },
	{ time: '2018-11-19', open: 176.71, high: 178.88, low: 172.30, close: 173.59 },
	{ time: '2018-11-20', open: 169.25, high: 172.00, low: 167.00, close: 169.05 },
	{ time: '2018-11-21', open: 170.00, high: 170.93, low: 169.15, close: 169.30 },
	{ time: '2018-11-23', open: 169.39, high: 170.33, low: 168.47, close: 168.85 },
	{ time: '2018-11-26', open: 170.20, high: 172.39, low: 168.87, close: 169.82 },
	{ time: '2018-11-27', open: 169.11, high: 173.38, low: 168.82, close: 173.22 },
	{ time: '2018-11-28', open: 172.91, high: 177.65, low: 170.62, close: 177.43 },
	{ time: '2018-11-29', open: 176.80, high: 177.27, low: 174.92, close: 175.66 },
	{ time: '2018-11-30', open: 175.75, high: 180.37, low: 175.11, close: 180.32 },
	{ time: '2018-12-03', open: 183.29, high: 183.50, low: 179.35, close: 181.74 },
	{ time: '2018-12-04', open: 181.06, high: 182.23, low: 174.55, close: 175.30 },
	{ time: '2018-12-06', open: 173.50, high: 176.04, low: 170.46, close: 175.96 },
	{ time: '2018-12-07', open: 175.35, high: 178.36, low: 172.24, close: 172.79 },
	{ time: '2018-12-10', open: 173.39, high: 173.99, low: 167.73, close: 171.69 },
	{ time: '2018-12-11', open: 174.30, high: 175.60, low: 171.24, close: 172.21 },
	{ time: '2018-12-12', open: 173.75, high: 176.87, low: 172.81, close: 174.21 },
	{ time: '2018-12-13', open: 174.31, high: 174.91, low: 172.07, close: 173.87 },
	{ time: '2018-12-14', open: 172.98, high: 175.14, low: 171.95, close: 172.29 },
	{ time: '2018-12-17', open: 171.51, high: 171.99, low: 166.93, close: 167.97 },
	{ time: '2018-12-18', open: 168.90, high: 171.95, low: 168.50, close: 170.04 },
	{ time: '2018-12-19', open: 170.92, high: 174.95, low: 166.77, close: 167.56 },
	{ time: '2018-12-20', open: 166.28, high: 167.31, low: 162.23, close: 164.16 },
	{ time: '2018-12-21', open: 162.81, high: 167.96, low: 160.17, close: 160.48 },
	{ time: '2018-12-24', open: 160.16, high: 161.40, low: 158.09, close: 158.14 },
	{ time: '2018-12-26', open: 159.46, high: 168.28, low: 159.44, close: 168.28 },
	{ time: '2018-12-27', open: 166.44, high: 170.46, low: 163.36, close: 170.32 },
	{ time: '2018-12-28', open: 171.22, high: 173.12, low: 168.60, close: 170.22 },
	{ time: '2018-12-31', open: 171.47, high: 173.24, low: 170.65, close: 171.82 },
	{ time: '2019-01-02', open: 169.71, high: 173.18, low: 169.05, close: 172.41 },
	{ time: '2019-01-03', open: 171.84, high: 171.84, low: 168.21, close: 168.61 },
	{ time: '2019-01-04', open: 170.18, high: 174.74, low: 169.52, close: 173.62 },
	{ time: '2019-01-07', open: 173.83, high: 178.18, low: 173.83, close: 177.04 },
	{ time: '2019-01-08', open: 178.57, high: 179.59, low: 175.61, close: 177.89 },
	{ time: '2019-01-09', open: 177.87, high: 181.27, low: 177.10, close: 179.73 },
	{ time: '2019-01-10', open: 178.03, high: 179.24, low: 176.34, close: 179.06 },
	{ time: '2019-01-11', open: 177.93, high: 180.26, low: 177.12, close: 179.41 },
	{ time: '2019-01-14', open: 177.59, high: 179.23, low: 176.90, close: 178.81 },
	{ time: '2019-01-15', open: 176.08, high: 177.82, low: 175.20, close: 176.47 },
	{ time: '2019-01-16', open: 177.09, high: 177.93, low: 175.86, close: 177.04 },
	{ time: '2019-01-17', open: 174.01, high: 175.46, low: 172.00, close: 174.87 },
	{ time: '2019-01-18', open: 176.98, high: 180.04, low: 176.18, close: 179.58 },
	{ time: '2019-01-22', open: 177.49, high: 178.60, low: 175.36, close: 177.11 },
	{ time: '2019-01-23', open: 176.59, high: 178.06, low: 174.53, close: 176.89 },
	{ time: '2019-01-24', open: 177.00, high: 177.53, low: 175.30, close: 177.29 },
	{ time: '2019-01-25', open: 179.78, high: 180.87, low: 178.61, close: 180.40 },
	{ time: '2019-01-28', open: 178.97, high: 179.99, low: 177.41, close: 179.83 },
	{ time: '2019-01-29', open: 178.96, high: 180.15, low: 178.09, close: 179.69 },
	{ time: '2019-01-30', open: 180.47, high: 184.20, low: 179.78, close: 182.18 },
	{ time: '2019-01-31', open: 181.50, high: 184.67, low: 181.06, close: 183.53 },
	{ time: '2019-02-01', open: 184.03, high: 185.15, low: 182.83, close: 184.37 },
	{ time: '2019-02-04', open: 184.30, high: 186.43, low: 183.84, close: 186.43 },
	{ time: '2019-02-05', open: 186.89, high: 186.99, low: 184.69, close: 186.39 },
	{ time: '2019-02-06', open: 186.69, high: 186.69, low: 184.06, close: 184.72 },
	{ time: '2019-02-07', open: 183.74, high: 184.92, low: 182.45, close: 184.07 },
	{ time: '2019-02-08', open: 183.05, high: 184.58, low: 182.72, close: 184.54 },
	{ time: '2019-02-11', open: 185.00, high: 185.42, low: 182.75, close: 182.92 },
	{ time: '2019-02-12', open: 183.84, high: 186.40, low: 183.52, close: 185.52 },
	{ time: '2019-02-13', open: 186.30, high: 188.68, low: 185.92, close: 188.41 },
	{ time: '2019-02-14', open: 187.50, high: 188.93, low: 186.00, close: 187.71 },
	{ time: '2019-02-15', open: 189.87, high: 192.62, low: 189.05, close: 192.39 },
	{ time: '2019-02-19', open: 191.71, high: 193.19, low: 191.28, close: 192.33 },
	{ time: '2019-02-20', open: 192.39, high: 192.40, low: 191.11, close: 191.85 },
	{ time: '2019-02-21', open: 191.85, high: 192.37, low: 190.61, close: 191.82 },
	{ time: '2019-02-22', open: 191.69, high: 192.54, low: 191.62, close: 192.39 },
	{ time: '2019-02-25', open: 192.75, high: 193.42, low: 189.96, close: 189.98 },
	{ time: '2019-02-26', open: 185.59, high: 188.47, low: 182.80, close: 188.30 },
	{ time: '2019-02-27', open: 187.90, high: 188.50, low: 183.21, close: 183.67 },
	{ time: '2019-02-28', open: 183.60, high: 185.19, low: 183.11, close: 185.14 },
	{ time: '2019-03-01', open: 185.82, high: 186.56, low: 182.86, close: 185.17 },
	{ time: '2019-03-04', open: 186.20, high: 186.24, low: 182.10, close: 183.81 },
	{ time: '2019-03-05', open: 184.24, high: 185.12, low: 183.25, close: 184.00 },
	{ time: '2019-03-06', open: 184.53, high: 184.97, low: 183.84, close: 184.45 },
	{ time: '2019-03-07', open: 184.39, high: 184.62, low: 181.58, close: 182.51 },
	{ time: '2019-03-08', open: 181.49, high: 181.91, low: 179.52, close: 181.23 },
	{ time: '2019-03-11', open: 182.00, high: 183.20, low: 181.20, close: 182.44 },
	{ time: '2019-03-12', open: 183.43, high: 184.27, low: 182.33, close: 184.00 },
	{ time: '2019-03-13', open: 183.24, high: 183.78, low: 181.08, close: 181.14 },
	{ time: '2019-03-14', open: 181.28, high: 181.74, low: 180.50, close: 181.61 },
	{ time: '2019-03-15', open: 182.30, high: 182.49, low: 179.57, close: 182.23 },
	{ time: '2019-03-18', open: 182.53, high: 183.48, low: 182.33, close: 183.42 },
	{ time: '2019-03-19', open: 184.19, high: 185.82, low: 183.48, close: 184.13 },
	{ time: '2019-03-20', open: 184.30, high: 187.12, low: 183.43, close: 186.10 },
	{ time: '2019-03-21', open: 185.50, high: 190.00, low: 185.50, close: 189.97 },
	{ time: '2019-03-22', open: 189.31, high: 192.05, low: 188.67, close: 188.75 },
	{ time: '2019-03-25', open: 188.75, high: 191.71, low: 188.51, close: 189.68 },
	{ time: '2019-03-26', open: 190.69, high: 192.19, low: 188.74, close: 189.34 },
	{ time: '2019-03-27', open: 189.65, high: 191.61, low: 188.39, close: 189.25 },
	{ time: '2019-03-28', open: 189.91, high: 191.40, low: 189.16, close: 190.06 },
	{ time: '2019-03-29', open: 190.85, high: 192.04, low: 190.14, close: 191.89 },
	{ time: '2019-04-01', open: 192.99, high: 195.90, low: 192.85, close: 195.64 },
	{ time: '2019-04-02', open: 195.50, high: 195.50, low: 194.01, close: 194.31 },
	{ time: '2019-04-03', open: 194.98, high: 198.78, low: 194.11, close: 198.61 },
	{ time: '2019-04-04', open: 199.00, high: 200.49, low: 198.02, close: 200.45 },
	{ time: '2019-04-05', open: 200.86, high: 203.13, low: 200.61, close: 202.06 },
	{ time: '2019-04-08', open: 201.37, high: 203.79, low: 201.24, close: 203.55 },
	{ time: '2019-04-09', open: 202.26, high: 202.71, low: 200.46, close: 200.90 },
	{ time: '2019-04-10', open: 201.26, high: 201.60, low: 198.02, close: 199.43 },
	{ time: '2019-04-11', open: 199.90, high: 201.50, low: 199.03, close: 201.48 },
	{ time: '2019-04-12', open: 202.13, high: 204.26, low: 202.13, close: 203.85 },
	{ time: '2019-04-15', open: 204.16, high: 205.14, low: 203.40, close: 204.86 },
	{ time: '2019-04-16', open: 205.25, high: 205.99, low: 204.29, close: 204.47 },
	{ time: '2019-04-17', open: 205.34, high: 206.84, low: 205.32, close: 206.55 },
	{ time: '2019-04-18', open: 206.02, high: 207.78, low: 205.10, close: 205.66 },
	{ time: '2019-04-22', open: 204.11, high: 206.25, low: 204.00, close: 204.78 },
	{ time: '2019-04-23', open: 205.14, high: 207.33, low: 203.43, close: 206.05 },
	{ time: '2019-04-24', open: 206.16, high: 208.29, low: 205.54, close: 206.72 },
	{ time: '2019-04-25', open: 206.01, high: 207.72, low: 205.06, close: 206.50 },
	{ time: '2019-04-26', open: 205.88, high: 206.14, low: 203.34, close: 203.61 },
	{ time: '2019-04-29', open: 203.31, high: 203.80, low: 200.34, close: 202.16 },
	{ time: '2019-04-30', open: 201.55, high: 203.75, low: 200.79, close: 203.70 },
	{ time: '2019-05-01', open: 203.20, high: 203.52, low: 198.66, close: 198.80 },
	{ time: '2019-05-02', open: 199.30, high: 201.06, low: 198.80, close: 201.01 },
	{ time: '2019-05-03', open: 202.00, high: 202.31, low: 200.32, close: 200.56 },
	{ time: '2019-05-06', open: 198.74, high: 199.93, low: 198.31, close: 199.63 },
	{ time: '2019-05-07', open: 196.75, high: 197.65, low: 192.96, close: 194.77 },
	{ time: '2019-05-08', open: 194.49, high: 196.61, low: 193.68, close: 195.17 },
	{ time: '2019-05-09', open: 193.31, high: 195.08, low: 191.59, close: 194.58 },
	{ time: '2019-05-10', open: 193.21, high: 195.49, low: 190.01, close: 194.58 },
	{ time: '2019-05-13', open: 191.00, high: 191.66, low: 189.14, close: 190.34 },
	{ time: '2019-05-14', open: 190.50, high: 192.76, low: 190.01, close: 191.62 },
	{ time: '2019-05-15', open: 190.81, high: 192.81, low: 190.27, close: 191.76 },
	{ time: '2019-05-16', open: 192.47, high: 194.96, low: 192.20, close: 192.38 },
	{ time: '2019-05-17', open: 190.86, high: 194.50, low: 190.75, close: 192.58 },
	{ time: '2019-05-20', open: 191.13, high: 192.86, low: 190.61, close: 190.95 },
	{ time: '2019-05-21', open: 187.13, high: 192.52, low: 186.34, close: 191.45 },
	{ time: '2019-05-22', open: 190.49, high: 192.22, low: 188.05, close: 188.91 },
	{ time: '2019-05-23', open: 188.45, high: 192.54, low: 186.27, close: 192.00 },
	{ time: '2019-05-24', open: 192.54, high: 193.86, low: 190.41, close: 193.59 },
]);

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

socket = WebSocket('wss://stream.binance.com:9443/ws/newstuff');

// Close a websocket
// TODO add parameter to pass in socket to close

const close_binance_socket = (socket) => {
	socket.close();
};