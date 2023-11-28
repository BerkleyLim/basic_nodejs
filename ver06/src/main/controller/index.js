// 이부분 router를 지정하여 각 사용할 api 지정
const router = require('express').Router();
const MainViewController = require('./MainViewController');
const MemberController = require('./MemberController');
const StoreController = require('./StoreController');

// cors 해결
const cors = require('cors');

// 아래는 특정 host만 허용 (리액트 프로젝트 적용전)
// const corsOption = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200
// }


// 각각 api 접근 허용을 위해 cors()를 추가해줍니다.
router.get('/', cors(), MainViewController.mainView)
router.get('/memberView/', cors(), MemberController.memberView)
router.get('/storeView/', cors(), StoreController.storeView)

module.exports = router;