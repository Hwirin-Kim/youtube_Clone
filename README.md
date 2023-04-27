# Youtube Clone Coding

## 목적

그동안 사용하지 않았던 tailwind CSS를 숙달하는 목적으로 간단한 youtube 클론 코딩을 진행하였습니다.

## 라이브러리

1. react-router-dom
   - 페이지 라우팅에 사용
2. axios
   - 비동기통신의 간소화를 위해 사용
3. @tanstack/react-query
   - 캐싱, 리페칭, 로딩처리 등을 위해 사용
4. tailwind CSS
   - 생산성과 유지보수성이 용이하여 많은 인기를 누리고있는 라이브러리이고, 반응형 디자인이 매우 간편하여 공부 목적으로 사용하게 되었습니다.

### 소소한 팁

- youtube API의 한정적 사용량
  - youtube API는 무료로 제공되는 부분이 굉장히 한정적이라서 하루에 요청할 수 있는 횟수가 많지 않습니다.
  - 따라서 편리한 개발을 위해 필요한 부분을 postman을 통해 미리 mockdata화 시켜서 사용하였습니다.
