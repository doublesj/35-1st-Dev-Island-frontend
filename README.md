
# PROJECT : We&Olufsen

### • 프로젝트 소개
>**Bang & Olufsen 웹사이트를 모티브로한 브랜드 웹사이트**  
https://www.bang-olufsen.com/ko/kr  
아이코닉 명품 오디오 브랜드 Bang & Olufsen가 가진 고급스러운 느낌을 담은 웹사이트  
회원가입, 로그인, 장바구니, 결제 등	커머스 사이트의 기본적인 FLOW 기능 구현

### • 작업기간 : 7월 18일 ~ 7월 29일 (2 week)

### • 팀원 소개
> wecode 35기 1차 프로젝트 Dev-Island TEAM  
 ![jpeg](https://postfiles.pstatic.net/MjAyMjA3MzFfODMg/MDAxNjU5MjUxMTMyMTgy.0qfKK0np7L6YiCRd1SOxmIae09rOTnSagEt_hK8NNnkg.y_37kOFlRdwh4BGp1fyi5zhDHyvDnrNd98AYLJaRnr4g.JPEG.nodame3806/SE-4d336d27-4028-44db-95f1-bc7f63d1e8c2.jpg?type=w966)  
  **FE** | 신수정, 심동규, 이현주, 정훈조  
  **BE** | 박서윤, 손찬규
 
### • 사용기술 및 협업 도구  
> FE: HTML, SCSS, Javascript, React, React-Router  
> BE: Phython, Django, MySQL  
> Common : Git&Github, AWS  
> Comunication : Notion, Slack, Trello  

### • 구현 기능 소개  

#### 1. 메인 페이지  

![gif](https://user-images.githubusercontent.com/62737638/181909170-2f7bf398-dba9-4a8e-a60e-96a455406961.gif)

##### - 메인 Full Banner 슬라이드 기능 구현 ▶︎ [관련 기술 블로그](https://blog.naver.com/nodame3806/222827372478) 
```
메인 최상단에 위치한 슬라이드 상수데이터(MAIN_BANNER)를 사용해 map함수로 구조분해할당.     
moving을 state값으로 선언해, useEffect hook을 사용해 컴포넌트가 마운트 되었을 때    
데이터의 length값을 인식하여 슬라이드를 움직일 수 있도록 순환시킬 div에 인라인 스타일 값 적용.    
슬라이드가 3초에 한번씩 함수를 실행할 수 있도록 setInterval 함수를 이용해 구현했으며    
언마운트 시 슬라이드를 종료 할 수 있도록 clearInterval 사용.    
```   
##### - 중앙 카테고리 슬라이드 기능 구현 ▶︎ [관련 기술 블로그](https://blog.naver.com/nodame3806/222824920597)  
```
useRef, useState, useEffect hook을 활용한 슬라이드 구현    
상수데이터(SLIDER_NAV_DATA)를 사용해 슬라이드 가능 범위(클릭 횟수)에 제한 설정.  
슬라이드에 사용되는 동일한 모양의 버튼을 컴포넌트로 분리해    
각각의 기능을 수행할 수 있도록 className으로 스타일값을 props로 전달  
이전이미지와 다음이미지로 이동하는 로직 구현.   
```
##### - useRef를 이용한 돔 객체 불러오기  
```
슬라이드 내 이미지 width와 margin 값을 변수로 저장해 movingRange를  
slideRef의 style값으로 전달해주는 로직 구현.  
```

  
  
#### 2. my order 페이지

![gif](https://postfiles.pstatic.net/MjAyMjA3MzFfMjcy/MDAxNjU5MjQ4OTMyMzEw.wQPeKP8T5JrZaEx7OlI_4zekxb3jBmooJzucJtm2Axwg.9NVSa9Bi-kWFrcGkpok9CURUSsjmafkC0k2RJOK_WjYg.GIF.nodame3806/2.gif?type=w966)

##### - sessionStorage에 저장시킨 토큰을 통해 구매내역 전달 받기  
```
fetch 함수의 header에 토큰을 확인하여 주문 정보 전달 받아 데이터를 맵 함수로 받는 로직 구현.  
```
##### - Toggle 버튼을 활용한 주문내역 상세보기 아코디언 구현 ▶︎ [관련 기술 블로그](https://blog.naver.com/nodame3806/222830026558) 
```
state를 Boolean값으로 받아 && 논리 연산자와 ! NOT 연산자를 활용해  
Toggle 버튼 클릭 시 컴포넌트가 보여지는 로직 구현.  
```
##### - 주문 취소 기능 구현 (정상 취소 시 조건부 랜더링)  ▶︎ [관련 기술 블로그](https://blog.naver.com/nodame3806/222831765264) 
```
주문 삭제된 데이터를 백엔드에 전달.  
fetch함수 method 'PATCH'를 사용해 body에 order_id: item.id 상품 아이디 값을 전달.  
주문 삭제 완료 시 className의 삼항연산자를 사용해 백그라운드 컬러가 변경되도록 구현.  
(새로고침 시 백그라운드 컬러가 원복 되는 버그를 발견했으나 시간 관계상 수정하지 못하고 배포😭)  
```
##### - 주문 총 합계 금액 도출   
```
백엔드에서 전달받는 데이터를 이용해 reduce 함수를 사용한 배열 속 특정 값들의 누적 합계 도출.  
```  
    
      

### ▶︎ [프로젝트 회고 보러가기](https://blog.naver.com/nodame3806/222834807641) 

### • 참고
>이 프로젝트는 Bang & Olufsen 사이트를 참조하여 학습 목적으로 만들었습니다.  
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.  
이 프로젝트에 사용된 모든 영상 및 이미지, 폰트 정보는 저작자 표기가 필요하지 않는 Royalty-free를 사용했습니다.  
