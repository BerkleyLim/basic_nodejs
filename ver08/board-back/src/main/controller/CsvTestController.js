const fs = require('fs');

const {processCsvToJsonList, jsonToCSV} = require('../service/csvLogicProcessService')

// 참조 : https://ooeunz.tistory.com/26
// https://tantangerine.tistory.com/206
exports.CsvTest = (request, response, next) => {
  try {
    const member = processCsvToJsonList('src/resource/csv/member.csv')
    const group = processCsvToJsonList('src/resource/csv/group.csv')
    // 데이터 가공 작업 끝

    if (!member || !group) console.log(`file read err : ${err}`); // debug

    IDX = request.body.groupIdx;
    let groupNum = group[String(Number(IDX - 1))].name;

    let people = member
      .filter((it) => it.groupIdx === IDX)
      .map((it) => it.name);

    // csv로 변환
    const csvResult = jsonToCSV(member);
    fs.writeFile('src/resource/csv/test.csv', csvResult, err => {
      if (err) {
        console.log(err.message);
    
        throw err;
      }
    
      console.log('data written to file');
    });

    response.send(`${groupNum} : ${people}`);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};

// group.js
