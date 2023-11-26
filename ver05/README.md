# Ver05

- 이 프로젝트는 Node.js 처음 시작하는 사람들을 위한 프로젝트입니다.
- express 메인 경로 지정 이후, 다른 경로도 설정해보자!
- 설정 이후, 디렉토리 구조를 나눠보자

<br/>

# 설명서 

- node 명령어를 package.json으로 지정

```
  "scripts": {
    "start": "node src/index.js"
  },
```

- 이후 `npm run start` 를 cmd에 명령어 입력 시 node 실행 가능

- ver04에서의 프로젝트를 프로젝트 구성으로 나눠보기

- 보통은 아래와 같이 니눠진다.

```
--- public
--- src
      ---- index.js (cafe24 호스팅 시 web.js)
      ---- router
      ---- view
```

- Java 개발자 출신으로 spring boot 폴더 구조 형식으로 연습해보기 (프로젝트 진행 시 다를 수 있음을 참조)

```
--- src
      ---- main
            ---- index.js (cafe24 호스팅시 web.js)
            ---- config
            ---- controller
            ---- service
      ---- resource
```


- src/index.js 에서는 서버 구동 부 설정하고, router 설정한다.
- controller에서 api 중계하고, 각 컴포넌트별 입력만 해주는 기능으로 수행
- service는 spring 특성 상 로직 구현 및 JDBC를 연동하여 데이터 가공 역할 진행
- config는 Spring 기준, 환경 설정 역할을 수행
- resource는 파일 및 my-batis에서 xml을 입력하는 역할 수행