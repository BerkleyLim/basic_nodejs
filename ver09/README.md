# Ver09

- 이 프로젝트는 Node.js 처음 시작하는 사람들을 위한 프로젝트입니다.
- nestjs 설치하고 적용해보기
- nodejs의 파트너 중 하나로 SSR 프레임워크로 디렉토리 구조 상 spring과 비슷합니다.

<br/>

# 설명서 

- nestjs 설치 방법

```
npm i -g @nestjs/cli
nest new project-name
```

- 참조 : https://wikidocs.net/148194


- 프로젝트 기본 셋팅 특징
  - src/main.ts : nest.js의 시작점
  - src/app.controller.ts : 요청, 응답 역할 수행, 즉 spring 의 Controller 역할
  - src/app.service.ts : spring에서 service 단 역할 수행, 비즈니스 로직 담당, 실제 개발 로직 역할
  - src/app.module.ts : 애플리케이션 루트 모듈, 각 모듈들은 이 파일에 import
  - src/app.controller.spec.ts : controller에 대한 단위 테스트 역할 수행(Jest 이용)
  - test/app.e2e-spec.ts : end-to-end 테스트 진행




