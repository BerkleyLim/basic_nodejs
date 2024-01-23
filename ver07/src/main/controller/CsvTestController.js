const fs = require('fs');

const {processCsvToJsonList} = require('../service/csvLogicProcessService')

// 참조 : https://ooeunz.tistory.com/26
// https://tantangerine.tistory.com/206
exports.CsvTest = (request, response, next) => {
  try {
    const member = processCsvToJsonList('src/resource/csv/member.csv')
    const group = processCsvToJsonList('src/resource/csv/group.csv')
    // 데이터 가공 작업 끝

    if (!member || !group) console.log(`file read err : ${err}`); // debug

    IDX = request.body.groupIdx;
    console.log(request.body)
    let groupNum = group[String(Number(IDX - 1))].name;

    let people = member
      .filter((it) => it.groupIdx === IDX)
      .map((it) => it.name);

    response.send(`${groupNum} : ${people}`);
  } catch (err) {
    console.log(`err with csv : ${err}`);
  }
};

// group.js

/**
 * 
// find group member
router.get('/:groupIdx', async (req, res) => {
    try {
        const member = await csv().fromFile(memberFilePath);
        const group = await csv().fromFile(groupFilePath);

        if (!member || !group) console.log(`file read err : ${err}`);   // debug     

        IDX = req.params.groupIdx;
        let groupNum = group[String(Number(IDX - 1))].name;

        let people = member.filter(it => it.groupIdx === IDX).map(it => it.name);
        
        res.send(`${groupNum} : ${people}`);
    } catch (err) {
        console.log(`err with csv : ${err}`);
    }
});

// find all
router.get('/', async (req, res) => {
    try {
     const member = await csv().fromFile(memberFilePath);

        if (!member) console.log(`file read err : ${err}`); // debug   
        else res.send(member);  // running

    } catch (err) {
        console.log(`file read err : ${err}`);
    }
});

module.exports = router;
 */
