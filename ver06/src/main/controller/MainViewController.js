const fs = require('fs')

exports.mainView = (request, response, next) => {
  try {
    response.json({pageNm: 'main 화면'})
  } catch (err) {
    console.log(err)
  }
};

  