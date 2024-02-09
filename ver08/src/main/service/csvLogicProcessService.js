const fs = require('fs');

// 1) csv 가공하는 단 - 리스트 출력 - json 형식 반환
exports.processCsvToJsonList = (path) => {
  let csv = fs.readFileSync(path).toString('utf-8');

  // let csvData = csv.replaceAll('\r', '').replaceAll(' ', '').split("\n");
  let csvData = csv.replaceAll('\r', '').split("\n");
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


// 3) json -> csv로 변환하여 저장
exports.jsonToCSV = (json_data) => {

  // 1-1. json 데이터 취득
  const json_array = json_data;
  // 1-2. json데이터를 문자열(string)로 넣은 경우, JSON 배열 객체로 만들기 위해 아래 코드 사용
  // const json_array = JSON.parse(json_data);
  

  // 2. CSV 문자열 변수 선언: json을 csv로 변환한 문자열이 담길 변수
  let csv_string = '';


  // 3. 제목 추출: json_array의 첫번째 요소(객체)에서 제목(머릿글)으로 사용할 키값을 추출
  const titles = Object.keys(json_array[0]);

  
  // 4. CSV문자열에 제목 삽입: 각 제목은 컴마로 구분, 마지막 제목은 줄바꿈 추가
  titles.forEach((title, index)=>{
      csv_string += (index !== titles.length-1 ? `${title},` : `${title}\r\n`);
  });


  // 5. 내용 추출: json_array의 모든 요소를 순회하며 '내용' 추출
  json_array.forEach((content, index)=>{
      
      let row = ''; // 각 인덱스에 해당하는 '내용'을 담을 행

      for(let title in content){ // for in 문은 객체의 키값만 추출하여 순회함.
          // 행에 '내용' 할당: 각 내용 앞에 컴마를 삽입하여 구분, 첫번째 내용은 앞에 컴마X
          row += (row === '' ? `${content[title]}` : `,${content[title]}`);
      }

      // CSV 문자열에 '내용' 행 삽입: 뒤에 줄바꿈(\r\n) 추가, 마지막 행은 줄바꿈X
      csv_string += (index !== json_array.length-1 ? `${row}\r\n`: `${row}`);
  })

  console.log(csv_string)
  // 6. CSV 문자열 반환: 최종 결과물(string)
  return csv_string;
}


// 파일 스기
// 파일을 작성하려면 writeFile메서드를 사용한다. 생성할 파일 경로(확장자 까지 입력)와 내용을 포함한다.
// fs.writeFile('./resource/README2.md', '## Heading2');

// 기존 내용이 있는 파일에 writeFile을 해버린다면 아예 덮어씌워지기 때문에 기존 내용뒤에 덧붙이려면 appendFile() 메서드를 사용하면 된다.
// fs.appendFile('../resource/README2.md', '### hello Express!');