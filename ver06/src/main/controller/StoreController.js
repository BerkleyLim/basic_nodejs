exports.storeView = (request, response, next) => {
  try {
    response.json({pageNm:'매장 화면', id:"홍길동", storeCd: 'cd1'})
  } catch (err) {
    console.log(err)
  }
};
  