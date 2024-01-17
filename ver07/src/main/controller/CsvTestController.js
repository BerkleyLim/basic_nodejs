const csv = reqire('csvtojson')

const memberFilePath = __dirname + "../../resource/csv/member.csv"
const groupFilePath = __dirname + "../../resource/csv/group.csv"

// 참조 : https://ooeunz.tistory.com/26
exports.CsvText = async (request, response, next) => {
  try {
    // 여기는 express를 사용한다.

    // csv 파일 읽어오기
    try{
      const member = await csv().fromFile(memberFilePath)
    } catch{(e) => console.log(e)}

    response.json({pageNm: 'main 화면'})
  } catch (err) {
    console.log(err)
  }
};

  