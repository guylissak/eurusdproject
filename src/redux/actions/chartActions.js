import axios from 'axios';
import { REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED, CLEAR_DATA} from '../types';

// initalizers
let tempArr = [
    {
      data : []
    }
  ]

  let clearArr = [
    {
      data : []
    }
  ]
    
  class candle {
    constructor() { 
          this.x = '';
          this.y = [];
        
  }
  }


// Get Data from the server, using axios, in case of success dispatch to store, else invoke the errors reducer
export const getData = (timeStamp) => dispatch => {
    
    axios
      .get(`https://www.fxempire.com/api/v1/en/markets/eur-usd/chart${timeStamp}`)
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            let data = {};
            data = new candle();
            data.x= new Date(res.data[i].date)
            data.y = [res.data[i].open, res.data[i].high, res.data[i].low, res.data[i].close]
            
            tempArr[0].data[i] = {}
            tempArr[0].data[i].x = '';
            tempArr[0].data[i].y = [];
            tempArr[0].data[i].x = data.x;
            tempArr[0].data[i].y = data.y;
      
            }

            dispatch({
            type: REQUEST_DATA_SUCCESS,
            payload: tempArr
        });
      })
      .catch(err =>
        dispatch({
          type: REQUEST_DATA_FAILED,
          payload: "Failed to fetch data from the server"
        })
      );
  };

  export const clearData = () => dispatch => {
      dispatch( {
          type: CLEAR_DATA,
          payload: clearArr
      })
  }
