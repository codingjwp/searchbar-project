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

### 태블릿

### 데스크탑

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

하지만 다른 입력값으로 서버와 통신할때 초기 연결이 무조건 발생하는 것과 `recoil` 자체는 전역 상태관리 라이브러리라서 HTTP 캐싱이랑은 역할이 달라서 `react-query`로 변경하였습니다.

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

react-query를 사용하여 작성한 캐싱 코드.
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

### 검색 후 페이지 구현

검색 추천 리스트만 보여주기에는 뭔가 부족한 것 같아서 `pakemonDb` 페이지를 만들어 카드 정보를 볼수 있도록 하였으며 `chart.js`를 사용해서 데이터를 도넛 형태로 표시하도록 하였습니다.
