import React from 'react';
import chartjs from 'chart.js';
import { font_family } from '../config';

class Chart extends React.Component {
  chartRef = React.createRef();

  constructor(props) {
    super(props);
    this.makeChart = this.makeChart.bind(this);
  }

  makeChart() {
    const canvasRef = this.chartRef.current.getContext('2d');
    const { type, data, options = {} } = this.props;
    new chartjs(canvasRef, {
      type,
      data,
      options: {
        legend: {
          position: 'bottom',
          labels: {
            fontFamily: font_family,
          }
        },
        tooltips: {
          titleFontFamily: font_family,
          bodyFontFamily: font_family,
          footerFontFamily: font_family,
        },
        ...options,
      },
    });
  }

  componentDidMount() {
    this.makeChart();
  }
  
  componentDidUpdate() {
    this.makeChart();
  }

  render() {
    return (
      <canvas id={this.props.id} ref={this.chartRef} />
    );
  }
}

export default Chart;
