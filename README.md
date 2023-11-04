# 검색바 및 검색어 추천 프로젝트

검색바와 검색어 추천 기능을 구현해보고 검색어 추천 기능에 캐싱 기능을 추가하여 구현해보는 프로젝트로  

앞에 팀프로젝트로 제작하였던 기존 프로젝트에서 추가적으로 기능을 추가하여 제작하였습니다.

## 기능

- **검색창 구현** (기존 기능에서 약간 변화)
- **검색어 추천 기능** (기존 기능에서 약간 변화)
- **캐싱 기능 구현** (기존 기능에서 약간 변화)
- **검색 결과 페이지 구현** (새로 구성)
- **반응형 웹페이지 구현** (새로 구성)
- **Mock API 구현** (새로 구성)

## 설치 방법

### Mock API 설치 (json-server 사용)

이전 프로젝트에서 사용한 API는 언제 사라질지 몰라 편하게 테스트 하기 위해 Mock API를 만들어 사용하였습니다.  
Mock API에 대한 자세한 내용은 아래 Github에 설명되어 있습니다.

[Mock API Github 경로](https://github.com/codingjwp/mock-search-static-data)

```bash
git clone https://github.com/codingjwp/mock-search-static-data.git
cd mock-search-static-data
npm i && npm start
```

### Client 설치

```bash
git clone https://github.com/codingjwp/searchbar-project.git
cd searchbar-project
npm i && npm run dev
```

## 기술

### 기본 라이브러리

![react](https://img.shields.io/badge/react-18.2.0-FF0000?logo=react)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.16.0-00FFFF?logo=react-router-dom)

### 추가 라이브러리

![sass](https://img.shields.io/badge/sass-1.67.0-FF0000?logo=sass)
![classnames](https://img.shields.io/badge/classnames-2.3.2-00FFFF?logo=classnames)
![react-query](https://img.shields.io/badge/react--query-3.39.3-800000?logo=react-query)
![json-server](https://img.shields.io/badge/json--server-0.17.3-FF0000?logo=json-server)