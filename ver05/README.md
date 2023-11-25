# Ver05

- 이 프로젝트는 Node.js 처음 시작하는 사람들을 위한 프로젝트입니다.
- express 메인 경로 지정 이후, 다른 경로도 설정해보자!
<br/>

# 설명서 

- ver04에서의 프로젝트를 프로젝트 구성으로 나눠보기
- node 명령어를 package.json으로 지정

```
  "scripts": {
    "start": "node src/index.js"
  },
```

- 보통은 아래와 같이 니눠진다.

```
--- public
--- src
      ---- index.js (cafe24 호스팅 시 web.js)
      ---- router
      ---- view
```

- Java 개발자 답게 spring boot 폴더 구조 형식으로 진행해보기

```
--- src
      ---- main
            ---- index.js (cafe24 호스팅시 web.js)
            ---- config
            ---- controller
            ---- service
      ---- resource
```