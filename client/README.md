# 검색바 프로젝트 프론트엔드 부분

`vite` + `reactjs` + `typescript`를 이용하여 만든 프론트엔드 입니다.

## Client 정보

### 폴더에 대한 정보

- 📂 apis : recoil 대한 코드
- 📂 assets : 간단한 이미지들
- 📂 components : 컴포넌트 코드
- 📂 hooks : 커스텀 훅 코드
- 📂 pages : 페이지 레이아웃 코드

### 설치 방법

git clone 한 후

```bash
cd searcher-project/client
touch .env # 아래에 .env에 입력할 내용 설명
npm install
npm run dev
```
### port 및 .env 파일

- port : 5173
- base_url : `http://localhost:4000`

```bash
# 한국어 검색
VITE_API_KR_LIST="http://localhost:4000/pokemonlist?_limit=5&krname_like="
# 영어 검색
VITE_API_EN_LIST="http://localhost:4000/pokemonlist?_limit=5&search_like="
# 정보
VITE_API_DB="http://localhost:4000/pokemondb?id="
# 폼 이미지
VITE_API_FORM="http://localhost:4000/form/"
# 기본 이미지
VITE_API_IMG="http://localhost:4000/sprites/"
# 타입 이미지
VITE_API_TYPE="http://localhost:4000/types/"
```

### url 경로
- `/` : 검색바가 있는 root 주소
- `/db/:id` : 포켓몬 정보 카드가 나오는 주소

### 사용한 라이브러리 
![sass](https://img.shields.io/badge/sass-1.67.0-FF0000?logo=sass)
![chart.js](https://img.shields.io/badge/chart.js-4.4.0-00FF00?logo=chart.js)
![classnames](https://img.shields.io/badge/classnames-2.3.2-00FFFF?logo=classnames)
![react-query](https://img.shields.io/badge/react--query-3.39.3-800000?logo=react-query)
![recoil](https://img.shields.io/badge/recoil-0.0.7-0000FF?logo=recoil)
