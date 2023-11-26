// 이부분 router를 지정하여 각 사용할 api 지정
const router = require('express').Router();
const MainViewController = require('./MainViewController');
const MemberController = require('./MemberController');
const StoreController = require('./StoreController');

router.get('/', MainViewController.mainView)
router.get('/memberView/', MemberController.memberView)
router.get('/storeView/', StoreController.storeView)

module.exports = router;