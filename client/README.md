# SearchBar 프로젝트

## 목표

[이전 검색바 프로젝트](https://github.com/codingjwp/pre-onboarding-11th-4-14.git)

1. 이전 로컬 캐싱을 localStorage에 했던걸 변경
2. 반응형으로 만들기.
3. ContextAPI 변경.

## 실행 방법 및 설명

**server**

1. json-server 사용.
2. 데이터: pokemondb.json
3. 라우터: routes.json
4. 이미지: asset 폴더
5. port: 4000

```bash
# git clone 후
cd searcher-project/server
npm install
npm start
```

**client**

1. port: 5173;
2. [.env 파일](#env-파일)

```bash
cd searcher-project/client

# 내용을 아래 존재
touch .env

npm install
npm run dev
```

## env 파일

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

## API 주소

- `/pokemonlist` : 검색바에 입력시 나타나는 검색리스트
  - `id`: uuid
  - `ename`: 영어이름
  - `search`: 검색시 사용되는 이름
  - `krname`: 한글이름
- `/pokemondb` : 검색 후 카드 정보에 표시되는 값
  - `id`: list랑 동일한 uuid
  - `number`: 넘버
  - `enname`: 영어이름
  - `krname`: 한글이름
  - `form1`: 첫번째 폼
  - `form2`: 두번째 폼
  - `form3`: 세번째 폼
  - `form4`: 네번째 폼
  - `form5`: 다섯번째 폼
  - `type1`: 첫번째 타입
  - `type2`: 두번째 타입
  - `hp`: 체력
  - `attack`: 공격력
  - `defense`: 방어력
  - `spattack`: 특수 공격력
  - `spdefense`: 특수 방어력
  - `speed`: 스피드
  - `imgname`: 이미지 이름
- `/form` : 폼 이미지
- `/sprites` : 기본 이미지
- `/types` : 타입 이미지
