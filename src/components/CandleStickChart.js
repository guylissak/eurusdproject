import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData, clearData } from '../redux/actions/chartActions';

 const options = {
    title: {
      text: 'EUR/USD CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
            min: 1.108,
            max: 1.127,
    }
  }

// main component to render the chart
class CandleStickChart extends Component {
      // clear the object that holds the current data
      componentWillUnmount() {
        this.props.clearData();
      }
      // load the EUR/USD data from the server and call redux action with the matched time stamp
      componentDidMount() {
          const { timeStamp } = this.props;
          this.props.getData(timeStamp);
      }

      render() {
        const { series } = this.props.chart;
        const { errors } = this.props;
        const { timeStamp } = this.props;
        let content;
        // for each time stamp align the axis
        switch (timeStamp) {
            case '?time=WEEK_1':
                options.yaxis.min = 1;
                options.yaxis.max = 1.3;
                break;    
            case '?time=MIN_1':
            case '?time=MIN_5':
                options.yaxis.min = 1.113;
                options.yaxis.max = 1.124;
                break;
            default:
                options.yaxis.min = 1.11;
                options.yaxis.max = 1.13;
        }
        // in case of errors display errors, else display the candle stick chart
        content = errors.length ? 
        <h1>{errors}</h1> :
        <div id="chart">
            <Chart options={options} series={series} type="candlestick" height="500" />
        </div>
    
        return (
          <div>
            {content}
          </div>
          )
      }
}

CandleStickChart.propTypes = {
    chart: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getData: PropTypes.func.isRequired
  };


const mapStateToProps = state => ({
    chart: state.chart,
    errors: state.errors
  });

export default connect(mapStateToProps, { getData, clearData })(CandleStickChart);

