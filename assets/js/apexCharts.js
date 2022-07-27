let options = {
	chart: {
	  type: 'donut'
	},
	series: [ 20000, 1400, 500, 200],
    labels: ['BTC', 'ETH', 'TEST1', 'TEST2'],

    dataLabels: {
        enabled: false
    }
	
  }

let apexChart = new ApexCharts(document.querySelector('#donut'), options)
apexChart.render()

// let test = new ApexCharts(document.querySelector('#doughnut'), options)
// test.render()
// console.log(test.render())