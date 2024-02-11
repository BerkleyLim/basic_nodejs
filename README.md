# basic_nodejs

- 이 프로젝트는 node.js 입문을 위한 프로젝트 중 하나입니다.
- 아래의 과정을 걸쳐 ver08까지 끝내어 nodejs의 대해 활용하는 법을 익혀보자.
<br/><br/><br/>

# nodejs 시작 계기

- 현재 주력 스택은 React/java(Spring boot)이며, 대부분 스타트업에서는 react/nodejs 점유율이 높아 기술 스택 습득을 목표
- nodejs와 express, nestjs 까지 익혀 이해도를 높이기
<br/>

# 디랙토리 별 프로젝트

## ver01

- 순수 js로 이용하여 nodejs 코드 짜고 서버 이용해보기
- 참조 블로그 : [(1) nodejs Getting start, 서버 구현하고 Hello world 띄어보기](https://berkley.tistory.com/62)
<br/>

## ver02

- express 코드를 사용하여, 서버 구축하기
- router사용 없이 결과 알아보기
- 참조 블로그 : [(2) express Framework 도입 (router 적용 x)](https://berkley.tistory.com/63)
<br/>

## ver03

- express 코드를 사용하여, 서버 구축하기
- 경로 삽입하여 cannot GET / 없애기
- console에 서버 실행 여부 확인하도록 안내창 펼치기
- 참조 블로그 : [(3) express Framework 에서 router 적용](https://berkley.tistory.com/64)
<br/>

## ver04

- express를 활용한 경로를 몇가지 추가하여 각각 경로별 구현하기
- 참조 블로그 : [(4) express에 각 경로별로 출력될 view단 나타내기](https://berkley.tistory.com/65)
<br/>

## ver05

- Node.js 폴더 구조 정하고 ver04 버전 그대로 결과 출력하도록 리팩토링 하기
- package.json으로 이용하여 npm 명령어로 node 서버 실행 및 시작점 정하기
- 설계 구조 : spring 설계 구조 형식으로 지정
- 참조 블로그 : [(5) nodejs + express 프로젝트 구성하여 리팩토링](https://berkley.tistory.com/66)
<br/>


## ver06

- ver06 프로젝트에서 html 샘플 프론트엔드 프로젝트에 API 연동
- 간단한 Nodejs는 백엔드 서버로 구성하기
- cors 문제 해결 코드 작성
- 참조 블로그 : [(6) 프론트엔드 샘플 html을 테스트로 만들고, nodejs 연동하기](https://berkley.tistory.com/68)
<br/>


## ver07 

- cvs를 이용하여 data를 저장하고, 데이터 정제 작업 후 리스트 띄우기
- 게시판 부분 전체 리스트 형식으로 유사 SSR로 띄우기
- 참조 블로그 : [(7) csv 데이터를 활용하여 html 값 만들기](https://berkley.tistory.com/105)

<br/>

## ver08

- ver07에 이어서 Method를 Post로 진행해보기
- csv로 데이터를 저장하는 형식으로 지정하고, 유사 CRUD 만들기
- post로 받을 경우 body-parser 설치
- front 서버는 nextjs에서 출력하는 형식으로 개발 진행
  - 여기서, front 에서는 단순 게시판 용으로 활용하기
- 참조 블로그 : [(8) csv로 데이터 저장, 게시판 CRUD API 만들기](https://berkley.tistory.com/108)

<br/>

## ver09 (예정)

- nestjs 템플릿 설치하고 구성해보기
- my-batis 연동 연습
- 각 api별로 로직 작성
- db 연동하여 진행하기
<br/>

## ver10 (예정)

- nodejs를 mybatis 연동하여 crud 게시판 구현
- 프론트 서버 nextjs 서버를 이용하여 api 통신 제공
- 프론트 서버에서 사용할 host만 cors 권한 부여
- React+java(spring boot)로 만든 게시판을 nextjs+nodejs 게시판 버전으로 변경
- 게시판 프로젝트 저장소 : https://github.com/BerkleyLim/project_board
