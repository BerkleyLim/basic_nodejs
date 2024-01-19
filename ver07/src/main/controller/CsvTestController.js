const csv = require("csvtojson");

const memberFilePath = __dirname + "../../resource/csv/member.csv";
const groupFilePath = __dirname + "../../resource/csv/group.csv";

// 참조 : https://ooeunz.tistory.com/26
exports.CsvTest = async (request, response, next) => {
  try {
    const member = await csv().fromFile(memberFilePath);
    const group = await csv().fromFile(groupFilePath);

    if (!member || !group) console.log(`file read err : ${err}`); // debug

    IDX = req.params.groupIdx;
    let groupNum = group[String(Number(IDX - 1))].name;

    let people = member
      .filter((it) => it.groupIdx === IDX)
      .map((it) => it.name);

    res.send(`${groupNum} : ${people}`);
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
