# SearchBar 프로젝트

프로젝트 인원 : 1명  
[이전 검색바 프로젝트](https://github.com/codingjwp/pre-onboarding-11th-4-14.git)

## 목표 및 구현기능

### 이전 목표

1. 검색창 구현
2. 검색어 추천 기능 구현
3. 캐싱 기능 구현

### 현재 목표

1. 검색창 구현
    - 이전 검색창 리스트 클릭 후 포커스 없는 부분 수정
    - 검색을 선택하지 않고 enter 클릭 시 첫번째 검색 리스트 내용을 적용하여 페이지 이동
2. 검색어 추천 기능 구현
    - 검색어 추천 기능 갯수 제한 구현
3. 캐싱 기능 구현
    - localStorage를 이용한 캐싱을 react-query를 이용하여 변경
4. 반응형 구현
    - 모바일, 테블릿, 렙탑
5. 검색 후 페이지 구현
    - 카드 형태의 정보 페이지

## client 관련 정보

client에 대한 정보 [README.md](./client/README.md)

1. 폴더에 대한 정보
2. 설치 방법
3. husky 사용방법
4. port 및 .env 파일
5. url 경로
6. 사용라이브러리

## server 관련 정보

server에 대한 정보 [README.md](./server/README.md)

1. 폴더에 따른 데이터 내용
2. 설치 방법
3. json-server 설정 내용
4. 엔드 포인트
5. 이미지 경로
6. JSON 파일 정보

## 1차 구현한 데모 사진

### 모바일

| 기본화면 | 검색바 적용화면 | 카드 화면 |
|:---:|:---:|:---:|
| <img width="390" alt="Screen Shot 2023-10-09 at 9 03 07 AM" src="https://github.com/codingjwp/searcher-project/assets/113403155/da3fe38d-8f2f-42cb-b808-d3d244ba3e29"> | <img width="390" alt="Screen Shot 2023-10-09 at 9 03 14 AM" src="https://github.com/codingjwp/searcher-project/assets/113403155/8611b330-98de-4822-941b-27e6b0349dff"> | <img width="390" alt="2" src="https://github.com/codingjwp/searcher-project/assets/113403155/2ff243a3-3e61-4bcd-be87-858b064a929d"> |

### 태블릿

| 검색바 적용화면 | 카드 화면 |
|:---:|:---:|
|<img width="390" alt="3" src="https://github.com/codingjwp/searcher-project/assets/113403155/65f68e51-6bbc-4744-8431-199bea5e4f72"> | <img width="390" alt="Screen Shot 2023-10-09 at 9 02 01 AM" src="https://github.com/codingjwp/searcher-project/assets/113403155/0987d9f8-31e6-4270-bf46-7325ba93d290"> |

### 데스크탑

| 검색바 적용화면 | 카드 화면 |
|:---:|:---:|
| <img width="390" alt="5" src="https://github.com/codingjwp/searcher-project/assets/113403155/a1dcc138-f277-463f-8f1c-b714b48e30c3"> | <img width="390" alt="6" src="https://github.com/codingjwp/searcher-project/assets/113403155/d861ad68-42f9-45e5-9848-eb9cc152eca0"> |

## 2차 구현한 데모사진 (리팩토링)

### 모바일
|메인화면|검색바|카드화면|
|:---:|:---:|:---:|
|<img width="384" alt="main page" src="https://github.com/codingjwp/searcher-project/assets/113403155/93ff3480-2b2c-40a4-9a13-c71123d66e31">|<img width="384" alt="searchbar action" src="https://github.com/codingjwp/searcher-project/assets/113403155/7c6c8d0f-3c17-4c36-a472-0866aa1f918a">|<img width="384" alt="card page" src="https://github.com/codingjwp/searcher-project/assets/113403155/d6249d1e-8ea2-45f5-b33e-df1269315dc7">|

### 태블릿

|메인화면|검색바|카드화면|
|:---:|:---:|:---:|
|<img width="384" alt="main page" src="https://github.com/codingjwp/searcher-project/assets/113403155/06c16934-a13e-47a4-a318-c0a6a5e64a4b">|<img width="384" alt="searchbar" src="https://github.com/codingjwp/searcher-project/assets/113403155/68f13b07-3edf-4c94-a712-89ec8c3f862c">|<img width="384" alt="card page" src="https://github.com/codingjwp/searcher-project/assets/113403155/309aa322-7fd7-4dc3-8492-eaee0946d74d">|


### 데스크탑

|메인화면|검색바|카드화면|
|:---:|:---:|:---:|
|<img width="384" alt="main page" src="https://github.com/codingjwp/searcher-project/assets/113403155/a68eb138-3264-4d1d-9db4-961f8b57e5f3">|<img width="384" alt="searchbar" src="https://github.com/codingjwp/searcher-project/assets/113403155/c47ab965-9e9b-4b4e-b3e7-d155c055a147">|<img width="384" alt="card page" src="https://github.com/codingjwp/searcher-project/assets/113403155/72d138f6-39d8-4347-8a7a-10d079cd1563">|


## 추가적 구현 기능

### 검색 추천 리스트를 선택하지 않고 enter 입력 시 작동

검색어가 존재하지 않습니다. 경우 `retrun` 하며 리스트가 존재할 경우 첫번째 태그 `id`값을 가져와 사용합니다.

```typescript
  const li = document.querySelector('li');
  if (li && li.title === 'no-search')
    return;
  const id = li?.id;
  navigate(`/db/${id}`);
```

### 검색 추천 리스트 갯수 제한 적용

추천 기능으로 관련된 내용을 전체적으로 조회하면 느린 인테넷 경우 많이 느려질 수도 있고
비용 측면에서 많이 생길수도 있을 것 같아서 갯수를 제한하여 조회하도록 수정하였습니다.  

**수정 방법**  
`json-sever`에서 쿼리스트링을 이용하며 `_limit`를 사용하여 5개로 제한 하였습니다.

```bash
'/pokemonlist?_limit=5'
```

### 캐싱기능 변경

`localStorage`를 이용한 캐싱 기능을 변경하였습니다.

첫 번째로 `recoil selector` 적용하였습니다. `recoil`의 `selector`은 자체적으로 캐싱 기능이 있어 이전에 입력한 내용들의 저장하여 그대로 가져오기 때문에 서버와 재연결을 하지 않습니다.

```typescript
export const searchListState = selectorFamily<PokemonListProps[], string>({
  key: 'searchListState',
  get: (name: string) => async () => {
    try {
      // .. 생략
    } catch(error: unknow) {
      // .. 생략
    }
  },
});
```

하지만 다른 입력값으로 서버와 통신할때 초기 연결이 무조건 발생하는 것과 `recoil` 자체는 전역 상태관리 라이브러리라서 HTTP 캐싱이랑은 역할이 달라서 `react-query`로 변경하였습니다.

**react-query를 사용하여 작성한 캐싱 코드.**

느린 네트워크 경우 `retry`가 많을 경우 너무 안좋은 사용자 경험을 줄 수 있어 retry를 0로 적용하였습니다. 그리고 느린 경우 `Loading`또는 `skeleton`을 주기 위해 `suspense`를 적용하기 위해 설정을 `true`로 하였습니다.

**기본 react-query 설정**

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, suspense: true, },
  },
});

const Routers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerElements} />
    </QueryClientProvider>
  );
};
```

`useQuery`를 간단한 hook으로 만들어서 적용하였으며 캐싱시간을 지정하였습니다.

**useQuery 적용**

- `queryKey` : 캐싱 키 동일한 키가 들어올 경우 캐싱
- `queryFn` : 서버와 연결하는 함수
- `staleTime` : 새로운 fetch를 할 시간 표시
- `cacheTime` : 캐싱 가능한 시간 표시

```typescript
export const useSearchList = (init: string) => {
  // ... 생략
  return useQuery({
    queryKey: ['pokemonlist', debounceValue],
    queryFn: () => searchListFn(debounceValue),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
}
```

### 반응형 적용

**scss를 사용한 이유**

원래 `styled-components`를 주로 사용하였으며 자바스크립트 내에서 적용하며 컴포넌트 별로 만들 수 있어서 편하지만 번들 크기 증가와 css보다 느린 속도를 가지고 있어 `scss`로 변경하여 적용해 보았습니다.

작성은 렙탑을 기준으로 작성하였습니다.

```scss
@mixin mobile {
  @media screen and (max-width: 767px) {
    @content;
  }
}

@mixin tablet {
  @media screen and (max-width: 1023px) {
    @content;
  }
}

@mixin desktop {
  @media screen and (min-width: 1024px) {
    @content;
  }
}
```

**반응형 수정**

반응형을 적용헀으나 scss와 반응형을 처음 사용하는 것이라 코드 자체가 너무 난잡하게 만들어 졌으며 해당 코드도 중복이 너무 많이 사용되었습니다.

그렇기 때문에 많은 코드량이 발생하여 코드가 난잡하여 수정을 하였으며 레이아웃 수정을 위해 전체적으로 수정을 하였으며 **데스크탑 기준으로 모바일 까지 만들걸 모바일에서 데스크탑 순**으로 만드는 방식으로 수정을 하였습니다

```scss
@mixin tablet {
  @media all and (min-width: 768px) {
    @content;
  }
}

@mixin desktop {
  @media all and (min-width: 1024px) {
    @content;
  }
}
```

### 검색 후 페이지 구현

검색 추천 리스트만 보여주기에는 뭔가 부족한 것 같아서 `pakemonDb` 페이지를 만들어 카드 정보를 볼수 있도록 하였으며 `chart.js`를 사용해서 데이터를 도넛 형태로 표시하도록 하였습니다.

`chat.js`의 라이브러리를 이용하여 `canvase`로 `Doughnut` 형태를 이용하여 만들었습니다.
||
|:---:|
|<img width="180" alt="2" src="https://github.com/codingjwp/searcher-project/assets/113403155/2ff243a3-3e61-4bcd-be87-858b064a929d">|

하지만 전체적으로 보여주는 느낌이 별로 좋지 않아 해당 라이브러리와 만들어 놓은 커스텀 훅을 지우고
`progress` 태그를 이용하여 bar를 만들어서 사용하였습니다.

**2차 수정**



























1,761, 980


# 검색바 프로젝트 프론트엔드 부분

`vite` + `reactjs` + `typescript`를 이용하여 만든 검색바, 검색리스트 프론트엔드 입니다.

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

### husky 사용방법

client 폴더 안에 package를 만들었기 때문에 .git과 장소가 달라져서 `npm install`시 husky가 설치되도록 하지 못하였기 때문에 따로 적용해야합니다.

git clone 한 후

```bash
cd searcher-project/client
npm install
npm before
cd ..
# git add 및 git commit 시 eslint, prettier 적용.
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
![classnames](https://img.shields.io/badge/classnames-2.3.2-00FFFF?logo=classnames)
![react-query](https://img.shields.io/badge/react--query-3.39.3-800000?logo=react-query)
