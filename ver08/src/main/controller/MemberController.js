exports.memberView = (request, response, next) => {
  try {
    response.json({pageNm:'member 화면', id:"홍길동"})

  } catch (err) {
    console.log(err)
  }
};
