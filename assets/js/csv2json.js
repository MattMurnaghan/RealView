// Module name: csv2json.js
// Author: Matthew Murnaghan
// Purpose: read data from csv files provided by https://data.binance.vision/?prefix=data/spot/
// The data will be converted into an array of json objects to create candlestick charts using the apexcharts node module


import {readFileSync, promises as fsPromises, readdir} from 'fs';

// Reads the name of a file and returns an array split by new line characters of the csv file data
const syncReadFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  // console.log('length = ', arr.length)
  // console.log('arr is ' , arr)
  return arr;
}

// Converts a unixtimestamp to a date object,  can also be used to output a formatted string for just the time without the date
export const unixTimeStampToDateTime = (stamp) => {
  let date = new Date(stamp); 
  // let hours = date.getHours();      //  Hours part from the timestamp
  // let minutes = date.getMinutes();  //  minutes part from the timestamp
  // let seconds = date.getSeconds();  //  seconds part from the timestamp
  // // Will display time in 10:30:23 format
  // let formattedTime = hours + ':' + minutes + ':' + seconds;
  return date
}

// converts a string of csv data to a kline object and returns the object as an argument
//TODO is arguement the right word here? 
const stringToKlineObj = (arr) => {
  // Declare a kline object to be returned with populated data
  let kline = {
      openTime: ' ',
      open: ' ',
      high: ' ',
      low: ' ',
      close: ' ',
      volume: ' ',
      closeTime: ' ',
      quoteAssetVolume: ' ',
      numberOfTrades: ' ',
      takerBuyAssetVolume: ' ',
      takerBuyQuoteAssetVolume: ' '
  };
  // loops through the passed array argument to create a kline object 
  let i = 0;

  // console.log('arr')
  // console.log(arr)
  for (const key in kline) {
      // if (kline.hasOwnProperty(key)) {
      //   console.log(key)
      //   kline[key] = parseFloat(arr[i])
      // };
      // console.log(parseFloat(arr[i]));
      kline[key] = parseFloat(arr[i]);
  i++;
  };
  // console.log(kline)

  kline.openTime = unixTimeStampToDateTime(kline.openTime);
  kline.closeTime = unixTimeStampToDateTime(kline.closeTime);
  return kline;
}

//TODO I think that returning an array of kline objects is the right call here, check this with guido
// Reads a CSV file from https://data.binance.vision/?prefix=data/spot/ and returns an array of kline csv strings
async function readKlineCsv (file) {
  let arr = syncReadFile(file);

  let kline_string_array = Array.apply(arr.length);
  
  let i = 0;
  for(i=0; i < arr.length; i++){
    kline_string_array[i]= arr[i].split(',');
  }

  // console.log(kline_string_array[1]);
  return kline_string_array;
}

// reads a file path to a csv document as the argument and converts the file first to an array of csv strings
// it then converts the string array to an array of objects each holding a kline object to be read by the apex charts node module 
async function klineObjFromCsv (file) {
  let kline_string_array = await readKlineCsv(file);
  let kline_obj_array = Array(kline_string_array.length);
  let i = 0;
  // console.log('first entry')
  // console.log(kline_string_array[0])

  for(i=0; i < kline_string_array.length; i++){
    // console.log(i);
    // console.log(stringToKlineObj(kline_string_array[i]));
    kline_obj_array[i] = stringToKlineObj(kline_string_array[i]);
  }

  // for(const kline_string in kline_string_array){
  //   console.log('kline string')
  //   console.log(kline_string[i]);
  //   console.log('passing to stringToKlineObj')
  //   kline_obj_array[i] = stringToKlineObj(kline_string[i]);
  //   i++;
  // }
  console.log(kline_obj_array)
  // let klineObj = stringToKlineObj(klineStringArray);
  return kline_obj_array;
}

let file = 'assets/csv/binance_data/1h/BTCUSDT-1h-2021-01.csv';

readKlineCsv(file);
klineObjFromCsv(file);















// let klineObj = klineObjFromCsv(file);
// console.log('kline obj = ', klineObj)

// asynchronous function that reads through the files in a directory and returns an array of the file names
async function readFilesInDirectory(rootPath) {
  try {
    return await fsPromises.readdir(rootPath);
  } catch (err) {
    console.error('Error occured while reading directory!', err);
  }
}

let rootPath = 'assets/csv/binance_data/1h';

// readFilesInDirectory(rootPath).then((result) => {
//   console.log(result)
// });

// This function takes a directory as the argument and loops through the directory, reading each csv file and returning an 
// array of kline objects for each file
const getCandleStickData = (path_to_csv_files) => {
  let klines = [];
  let files;
  //get file names
  readFilesInDirectory(path_to_csv_files).then((result) => {
    // console.log(result);
    files = result;

  }).then(() =>{
    files.forEach(element => {
      console.log(klineObjFromCsv(`${path_to_csv_files}/${element}`));
    });
  })

}

// getCandleStickData(rootPath);