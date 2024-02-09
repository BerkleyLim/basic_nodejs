// api 로직 작성 - 여기서 게시판 조회 출력
exports.selectList = (request, response, next) => {
  try {
    response.json({pageNm: 'main 화면'})
  } catch (err) {
    console.log(err)
  }
};

// api 로직 작성 - 여기서 게시판 삽입
exports.insert = (request, response, next) => {
  try {
    response.json({pageNm: 'main 화면'})
  } catch (err) {
    console.log(err)
  }
};

// api 로직 작성 - 여기서 게시판 수정
exports.update = (request, response, next) => {
  try {
    response.json({pageNm: 'main 화면'})
  } catch (err) {
    console.log(err)
  }
};

// api 로직 작성 - 여기서 게시판 삭제
exports.delete = (request, response, next) => {
  try {
    response.json({pageNm: 'main 화면'})
  } catch (err) {
    console.log(err)
  }
};
