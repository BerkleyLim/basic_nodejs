# Ver08

- 이 프로젝트는 Node.js 처음 시작하는 사람들을 위한 프로젝트입니다.
- ver06 프로젝트 구조 기반으로 csv를 이용하여 게시판 읽기 출력
- ver07 작업에 이어서 CRUD 게시판 만들기
  - DB 적용 전 csv로 이용하여 게시판 적용함

<br/>

# 설명서 

- csv 설정하기
  - csvtojson 설치
- resource에 csv 파일 넣기
- csv 로직을 service단에 두고 json과 csv 컨버터 하기
- CRUD 형태로 게시판 데이터 출력하기
- get 방식 : read
- post 방식 : create, delete, update
- csv로 데이터 관리를 할 때에는 test.csv로 저장이 아닌 main.csv로 변경 할 것!
  - 현재는 테스트 용도로 일부로 test.csv를 이용하여 결과 값을 출력하기 위한 용도로 사용함