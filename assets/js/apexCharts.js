export class Options {
  constructor(type, series, labels, enabled) {
    this.chart = {
      'type': type
    };
    this.series = series;
    this.labels = labels;
    this.dataLabels = {
      'enabled': enabled
    };
  }
};

export class Donut {
  constructor(labels) {
    this.chart = 'donut';
    this.series = Array(labels.length); // prices to be displated 
    this.disp_series = Array(labels.length);
    this.labels = labels; // the working copy of the labels that can be toggled by the user
    this.disp_labels = Array(labels.length);
    this.show_values = Array(labels.length).fill(true);
    this.data_labels = false; // toggle status of data labels
    this.renderedChart = null; // hold the rendered chart object
    this.first_render = true; // checks to see if a chart object has already been rendered
  }



  toggleLabels(toggle) {
    let toggle_index = this.labels.indexOf(toggle);
    if (this.show_values.at(toggle_index) === true) {
      this.show_values[toggle_index] = false;
    } else if (this.show_values.at(this.labels.indexOf(toggle)) === false) {
      this.show_values[toggle_index] = true;
    }
    let i = 0;
    for (i = 0; i < this.show_values.length; i++) {
      if (this.show_values[i] === true) {
        this.disp_labels[i] = this.labels.at(i);
        this.disp_series[i] = this.series.at(i);
      } else {
        this.disp_labels[i] = null;
        this.disp_series[i] = null;
      }
    }

    this.disp_labels = this.disp_labels.filter(element => {
      return element !== null && element !== undefined;
    });

    this.disp_series = this.disp_series.filter(element => {
      return element !== null && element !== undefined;
    });
    // console.log(this.disp_labels);
    // console.log(this.disp_series);
  }

  // update the series of the donut object
  updateSeries() {
    console.log('in update series');
    let obj;
    let labels = this.labels;

    for (let i = 0; i < sessionStorage.length; i++) {
      obj = JSON.parse(sessionStorage.getItem(labels[i].toLowerCase()));
      this.series[i] = parseFloat(obj.price);
    }
    console.log('assign series index to series')
    // this.series = this.series_index.slice();
    console.log(this.labels);
    // console.log(this.series_index);
    console.log(this.series)
  }

  // 
  getLabels() {
    console.log('in getLabels')
    console.log(this.labels);
    return this.labels;
  }

  // toggle datalabels on or off

  toggleDataLabels() {
    let enabled = this.data_labels;
    if (enabled) {
      enabled = false
    } else {
      enabled = true;
    }
    this.data_labels = enabled;
  }

  // Render the donut chart using the apexCharts library
  renderDonut() {
    console.log('in render donut');

    // console.log(opt)

    if (this.first_render) {
      let opt = new Options(this.chart, this.series, this.labels, this.data_labels);
      this.renderedChart = new ApexCharts(document.querySelector('#donut'), opt);
      this.renderedChart.render();
      this.first_render = false;
    } else {
      let opt = new Options(this.chart, this.disp_series, this.disp_labels, this.data_labels);
      this.renderedChart.updateOptions(opt);
    }
    // console.log(this.series_index);
    // console.log(this.series)
  }
}


export let optionsTest = {
  chart: {
    type: 'donut'
  },
  series: [20000, 1400, 500, 200],
  labels: ['BTC', 'ETH', 'TEST1', 'TEST2'],

  dataLabels: {
    enabled: false
  }
}

function updateDonut() {
  // console.log('fire updateDonut');
  // console.log(opt);
  apexChart = new ApexCharts(document.querySelector('#donut'), opt);
  apexChart.render();
}