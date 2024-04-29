# DTO

- 외부로부터 유입되는 데이터를 모델링
- 생성할 유저를 나타낼 DTO 클래스와 수정할 유저 데이터를 나타낼 DTO 클래스 필요

<br/>

## create-board.dto.ts

- NestJS CLI가 이미 만들어놓은 상태
- 보통은 데이터를 외부로 임의로 받을 때 사용

<br/>

## update-board.dto.ts

- 유틸리티 타입(PartialType) 통해 CreateBoardDto 클래스를 확장
- 모든 속성을 선택적으로 입력 받도록 함
- Java로 치면 Mapper 나 Repository에 해당