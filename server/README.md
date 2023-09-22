# json-server을 이용한 임시 API

[npm json-server](https://www.npmjs.com/package/json-server) 설치하여 만든 포켓몬스터 검색바 API입니다.

##  Server 정보

### 폴더에 따른 데이터 내용

- 데이터: pokemondb.json
- 라우터: routes.json
- 이미지:  📂 asset 폴더
  - 📂 form : 포켓몬 폼에 따른 이미지 (미완성)
  - 📂 sprites : 포켓몬 기본 이미지
  - 📂 types : 포켓몬 타입 이미지

### 설치 방법

git clone 한 후

```bash
cd searcher-project/server
npm install
npm start # or npm run start
```
### json-server 설정 내용
- `port` : 4000
- `read-only`: true
- `routes` : routes.json으로 설정
- `JSON file` : pokemondb.json으로 설정
- `static` : `./assets` 으로 이미지 경로 설정  

### 엔드 포인트
`routes.json`에 설정되어 있습니다.
- `/pokemonlist`: 검색바 추천리스트 목록
- `/pokemondb`: 포켓몬 정보

```bash
# 사용 방법
${localhost주소}/pokemonlist?_limit=5&krname_like=${검색바에 입력한 내용}
${localhost주소}/pokemondb?id=${검색바에 입력한 내용의 id값}
```
쿼리 스트링을 이용하여 데이터를 가져옵니다.
- `_limit=5` : 가져오는 내용의 갯수를 제한합니다. (`5`일 경우 5개이하로 가져옵니다)
- `krname_like` : 키값이 `krname`에서 입력한 값을 포함한 내용을 가져옵니다.
- `id`: `_like`가 없는 경우 `id`에 입력한 값과 동일한 내용을 가져옵니다.


### 이미지 경로
이미지는 `routes.json`에 설정되어 있지 않고 `package.json`에 `--static`으로 설정되어 있습니다.
- `/form` : 포켓몬 폼에 따른 이미지 (미완성)
- `/sprites` : 포켓몬 기본 이미지
- `/types` : 포켓몬 타입 이미지
```bash
# 사용방법
${localhost주소}/${form or sprites or types}/${이미지 이름.확장명}
```

## JSON 파일 정보

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

> 이미지 및 포켓몬 정보  
> 출처 : [Pokemon Database](https://pokemondb.net/) , [포켓몬 공식 사이트](https://pokemonkorea.co.kr/pokedex)