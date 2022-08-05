// export class apexChart{
//   constructor(type){
//     this.type = type;
//   }
// }

// export class dataLabels {
//   constructor(enabled){
//     this.enabled = enabled;
//   }
// }

export class options {
  constructor(type, series, labels, enabled){
    this.chart = {'type': type};
    this.series = series;
    this.labels = labels;
    this.dataLabels = {'enabled': enabled};
  }
};

export class donut {
  constructor(series){
    this.series = null;
  }

}


export let optionsTest = {
	chart: {
	  type: 'donut'
	},
	series: [ 20000, 1400, 500, 200],
  labels: ['BTC', 'ETH', 'TEST1', 'TEST2'],

  dataLabels: {
      enabled: false
  }
}

function updateDonut(){
  // console.log('fire updateDonut');
  // console.log(opt);
  apexChart = new ApexCharts(document.querySelector('#donut'), opt);
  apexChart.render();
}