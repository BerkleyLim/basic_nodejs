const fs = require('fs');

// 1) csv 가공하는 단 - 리스트 출력 - json 형식 반환
exports.processCsvToJsonList = (path) => {
  let csv = fs.readFileSync(path).toString('utf-8');

  let csvData = csv.replaceAll('\r', '').replaceAll(' ', '').split("\n");
  let key = csvData[0].split(',');

  let dataSet = {}
  for (let i = 0; i < key.length; i++) {
    dataSet = {
      ...dataSet,
      [key[i]]: ''
    }
  }

  let csvToJSON = new Array();

  for (let gagongDataIndex = 1; gagongDataIndex < csvData.length; gagongDataIndex++) {
    let processData = csvData[gagongDataIndex].split(',');
    for (let i = 0; i < key.length; i++) {
      dataSet = {
        ...dataSet,
        [key[i]]: processData[i]
      }
    }
    
    csvToJSON.push(dataSet)
  }

  console.log(csvToJSON)

  return csvToJSON
}

// 2) csv 가공하는 단 - 객체 출력 - json 형식 반환
exports.processCsvToJsonObject = (path) => {
  let csv = fs.readFileSync(path).toString('utf-8');

  let csvData = csv.replaceAll('\r', '').replaceAll(' ', '').split("\n");
  let key = csvData[0].split(',');

  let dataSet = {}
  for (let i = 0; i < key.length; i++) {
    dataSet = {
      ...dataSet,
      [key[i]]: ''
    }
  }

  return dataSet;
}