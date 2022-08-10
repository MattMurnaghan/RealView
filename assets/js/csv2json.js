// Module name: csv2json.js
// Author: Matthew Murnaghan
// Purpose: read data from csv files provided by https://data.binance.vision/?prefix=data/spot/
// The data will be converted into an array of json objects to create candlestick charts using the apexcharts node module


import {
  writeFile,
  readFileSync,
  promises as fsPromises,
  readdir,
  appendFile
} from 'fs';

// Reads the name of a file and returns an array split by new line characters of the csv file data
const syncReadFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}

// Converts a unixtimestamp to a date object,  can also be used to output a formatted string for just the time without the date
export const unixTimeStampToDateTime = (stamp) => {
  let date = new Date(stamp);
  let year = date.getFullYear();  //  seconds part from the timestamp
  let month = date.getMonth() + 1;      //  Hours part from the timestamp
  let day = date.getDate();  //  minutes part from the timestamp
  // // Will display time in 10:30:23 format
  let formattedTime = year + '-' + month + '-' + day;
  return formattedTime
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
  for (const key in kline) {
    kline[key] = parseFloat(arr[i]);
    i++;
  };

  kline.openTime = unixTimeStampToDateTime(kline.openTime);
  kline.closeTime = unixTimeStampToDateTime(kline.closeTime);

  let formatted_kline = {
    time: kline.openTime, 
    open: kline.open,
    high: kline.high, 
    low: kline.low, 
    close: kline.close 
  }
  return formatted_kline;
}

// Reads a CSV file from https://data.binance.vision/?prefix=data/spot/ and returns an array of kline csv strings
async function readKlineCsv(file) {
  let arr = syncReadFile(file);
  let kline_string_array = Array.apply(arr.length);
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    kline_string_array[i] = arr[i].split(',');
  }
  return kline_string_array;
}

// reads a file path to a csv document as the argument and converts the file first to an array of csv strings
// it then converts the string array to an array of objects each holding a kline object to be read by the apex charts node module 
async function klineObjFromCsv(file) {
  let kline_string_array = await readKlineCsv(file);
  let kline_obj_array = Array(kline_string_array.length);
  let i = 0;
  let data;

  for (i = 0; i < kline_string_array.length; i++) {
    kline_obj_array[i] = stringToKlineObj(kline_string_array[i]);
  }

  file = file.substring(0, file.indexOf('.')) + '.json';
  data = JSON.stringify(kline_obj_array);
  writeFile(file, data, (err) => {
    if (err) {
      throw err;
    }
  });
  return kline_obj_array;
}

// asynchronous function that reads through the files in a directory and returns an array of the file names
async function readFilesInDirectory(rootPath) {
  try {
    return await fsPromises.readdir(rootPath);
  } catch (err) {
    console.error('Error occured while reading directory!', err);
  }
}

// This function takes a directory as a parameter and loops through the directory, reading each csv file and 
// writing a json file from the historical binance csv candlestick data 
async function getCandleStickData (path_to_csv_files) {
  let files;
  //get file names
  files = await readFilesInDirectory(path_to_csv_files)
  files.forEach(element => {
        klineObjFromCsv(`${path_to_csv_files}/${element}`);
      });
}

let root_path = 'assets/csv/kline_data/btcusdt/1d';
getCandleStickData(root_path);
