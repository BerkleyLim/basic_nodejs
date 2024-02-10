// 이부분 router를 지정하여 각 사용할 api 지정
const router = require('express').Router();
const MainViewController = require('./MainViewController');
const BoardController = require('./board/BoardController');
// const CsvTestController = require('./CsvTestController');

// cors 해결
const cors = require('cors');

// 아래는 특정 host만 허용 (리액트 프로젝트 적용전)
// const corsOption = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200
// }


// 각각 api 접근 허용을 위해 cors()를 추가해줍니다.
router.get('/', cors(), MainViewController.mainView)
router.get('/readBoard', cors(), BoardController.readBoard)

// post를 이용하여 데이터 불려오기
router.post('/createBoard', cors(), BoardController.createBoard)
router.post('/deleteBoard', cors(), BoardController.deleteBoard)
router.post('/updateBoard', cors(), BoardController.updateBoard)
// router.post('/csvTest/', cors(), CsvTestController.CsvTest)

module.exports = router;