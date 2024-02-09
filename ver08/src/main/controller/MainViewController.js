const fs = require('fs');

const {processCsvToJsonList, jsonToCSV} = require('../service/csvLogicProcessService')

exports.mainView = (request, response, next) => {
  try {
    const main = processCsvToJsonList('src/resource/csv/main.csv')
    // 데이터 가공 작업 끝

    if (!main) console.log(`file read err : ${err}`); // debug

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

  