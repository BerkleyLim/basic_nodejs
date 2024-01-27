const fs = require('fs');

const {processCsvToJsonList, jsonToCSV} = require('../service/csvLogicProcessService')

exports.mainView = (request, response, next) => {
  try {
    const main = processCsvToJsonList('src/resource/csv/main.csv')
    // 데이터 가공 작업 끝

    if (!main) console.log(`file read err : ${err}`); // debug

    // IDX = request.body.groupIdx;
    // let groupNum = group[String(Number(IDX - 1))].name;

    // let people = member
    //   .filter((it) => it.groupIdx === IDX)
    //   .map((it) => it.name);

    // csv로 변환
    // const csvResult = jsonToCSV(member);
    // fs.writeFile('src/resource/csv/test.csv', csvResult, err => {
    //   if (err) {
    //     console.log(err.message);
    
    //     throw err;
    //   }
    
    //   console.log('data written to file');
    // });

    

    // response.send(`${groupNum} : ${people}`);

    // let tbody = () => {
    //   let data = main?.map((data, index) => {
    //     return `<tr key=${index}><td width="50px">${data?.bno}</td><td width="150px">${data?.title}</td><td width="600px">${data?.contents}</td></tr>`
    //   })
    //     console.log(typeof(data))
    //     console.log(JSON.stringify(data))
    //     return JSON.stringify(data);
    //   }
    let html = `
      <div style="display:flex; width:800px; text-align:center">
        <table>
          <thead>
            <tr style='border: 1px solid'>
              <th width="50px" style='border: 1px solid'>bno</th>
              <th width="150px" style='border: 1px solid'>title</th>
              <th width="600px" style='border: 1px solid'>contents</th>
            </tr>
          </thead>
          <tbody>
          ${
            // tbody()
            main?.map((data, index) => 
              `
              <tr key=${index} style='border: 1px solid'>
                <td width="50px" style='border: 1px solid'>${data?.bno}</td>
                <td width="150px" style='border: 1px solid'>${data?.title}</td>
                <td width="600px" style='border: 1px solid'>${data?.contents}</td>
              </tr>
              `
            )

          }
          </tbody>
        </table>
      </div>
    `;
    console.log(html)
    // response.send(main);
    response.send(html);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};

  