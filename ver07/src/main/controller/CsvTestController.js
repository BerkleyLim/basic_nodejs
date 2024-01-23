const fs = require('fs');

// 참조 : https://ooeunz.tistory.com/26
// https://tantangerine.tistory.com/206
exports.CsvTest = (request, response, next) => {
  try {

    let member = fs.readFileSync("src/resource/csv/member.csv");
    member = member.toString('utf-8')

    let group = fs.readFileSync("src/resource/csv/group.csv");
    group = group.toString('utf-8')

    // 여기서부터 데이터 가공 작업 실시
    let memberData = member.replaceAll('\r', '').replaceAll(' ', '').split("\n");
    let key = memberData[0].split(',');

    let typeMember = {}

    for (let i = 0; i < key.length; i++) {
      typeMember = {
        ...typeMember,
        [key[i]]: ''
      }
    }
    let gagongMember = new Array();

    for (let gagongDataIndex = 1; gagongDataIndex < memberData.length; gagongDataIndex++) {
      let gagong = memberData[gagongDataIndex].split(',');
      for (let i = 0; i < key.length; i++) {
        typeMember = {
          ...typeMember,
          [key[i]]: gagong[i]
        }
      }
      
      gagongMember.push(typeMember)
    }
    // 데이터 가공 작업 끝
    console.log("로직 성공")

    if (!member || !group) console.log(`file read err : ${err}`); // debug

    IDX = request.params.groupIdx;
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
