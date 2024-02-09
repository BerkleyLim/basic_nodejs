// 이부분 router를 지정하여 각 사용할 api 지정
const router = require('express').Router();
const BoardController = require('..service/BoardService');

// cors 해결
const cors = require('cors');

// 아래는 특정 host만 허용 (리액트 프로젝트 적용 이후)
const corsOption = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}


// 각각 api 접근 허용을 위해 cors()를 추가해줍니다.
// 이때, 해당 포트만 접근하기 위해 corsOption에서 설정한 값을 넣어줍니다.
router.get('/api/board/select/list', cors(corsOption), BoardController.selectList) // 게시판 전체 보기
router.post('/api/board/insert/board', cors(corsOption), BoardController.insert)
router.post('/api/board/update/board', cors(corsOption), BoardController.update)
router.post('/api/board/delete/board', cors(corsOption), BoardController.delete)

module.exports = router;