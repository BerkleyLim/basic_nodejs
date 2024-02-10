const fs = require('fs');

const {processCsvToJsonList, jsonToCSV} = require('../../service/csvLogicProcessService')

// 전체 읽기
exports.readBoard = (request, response, next) => {
  try {
    const main = processCsvToJsonList('src/resource/csv/main.csv')
    // 데이터 가공 작업 끝

    if (!main) console.log(`file read err : ${err}`); // debug

    // csv로 변환 - 파일 테스트용
    // const csvResult = jsonToCSV(main);
    // fs.writeFile('src/resource/csv/test.csv', csvResult, err => {
    //   if (err) {
    //     console.log(err.message);
    
    //     throw err;
    //   }
    
    //   console.log('data written to file');
    // });

    response.json(main);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};

// 생성
exports.createBoard = (request, response, next) => {
  try {
    let params = request?.body;

    if (!!!params?.title || !!!params?.contents) {
      response.json("데이터 누락");
      return;
    }

    let main = processCsvToJsonList('src/resource/csv/main.csv')
    // 데이터 가공 작업 끝

    if (!main) console.log(`file read err : ${err}`); // debug

    console.log(params)


    
    // 가장 마지막 uno의 +1 더하여 추가
    let lastUno = (parseInt(main[main.length-1].bno)+1).toString();

    // 배열 생성할 데이터 형식 추가
    const createMainInterface = {
      bno: lastUno,
      title: params?.title,
      contents: params?.contents
    }
    main.push(createMainInterface)

    // csv로 변환
    const csvResult = jsonToCSV(main);
    fs.writeFile('src/resource/csv/test.csv', csvResult, err => {
    // fs.writeFile('src/resource/csv/main.csv', csvResult, err => {
      if (err) {
        console.log(err.message);
    
        throw err;
      }
    
      console.log('data written to file');
    });

    response.json(main);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};

  
// 삭제
exports.deleteBoard = (request, response, next) => {
  try {
    let params = request?.body;

    if (!!!params?.bno) {
      response.json("데이터 누락");
      return;
    }

    let main = processCsvToJsonList('src/resource/csv/main.csv')
    // 데이터 가공 작업 끝

    if (!main) console.log(`file read err : ${err}`); // debug

    console.log(params)

    // 삭제 수행
    main = main.filter(data => data?.bno != params?.bno)

    // csv로 변환
    const csvResult = jsonToCSV(main);
    fs.writeFile('src/resource/csv/test.csv', csvResult, err => {
    // fs.writeFile('src/resource/csv/main.csv', csvResult, err => {
      if (err) {
        console.log(err.message);
    
        throw err;
      }
    
      console.log('data written to file');
    });

    response.json(main);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};
  
// 갱신
exports.updateBoard = (request, response, next) => {
  try {
    let params = request?.body;

    if (!!!params?.bno || !!!params?.title || !!!params?.contents) {
      response.json("데이터 누락");
      return;
    }

    let main = processCsvToJsonList('src/resource/csv/main.csv')
    // 데이터 가공 작업 끝

    if (!main) console.log(`file read err : ${err}`); // debug

    console.log(main)
    console.log(params)

    // 배열 생성할 데이터 형식 추가
    const createMainInterface = {
      bno: params?.bno,
      title: params?.title,
      contents: params?.contents
    }

    // 바꾸기
    for (let i = 0; i < main.length; i++) {
      // 아래는 일부로 형 고려하지 않고 조건 검사하라고 == 라고 둠
      if (main[i].bno == params?.bno) {
        // 아래는 바꾸기
        main.splice(i,1,createMainInterface)
        break;
      }
    }

    // csv로 변환
    const csvResult = jsonToCSV(main);
    fs.writeFile('src/resource/csv/test.csv', csvResult, err => {
    // fs.writeFile('src/resource/csv/main.csv', csvResult, err => {
      if (err) {
        console.log(err.message);
    
        throw err;
      }
    
      console.log('data written to file');
    });

    response.json(main);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};
