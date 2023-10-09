import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import SearchHome from './pages/SearchHome';
// import PokemonDb from './pages/PokemonDb';
import ErrorBoundary from './apis/ErrorBoundary';
// import ErrorModal from './components/ErrorModal';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { Suspense } from 'react';

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path='/'
        element={
          <ErrorBoundary>
            <SearchHome />
          </ErrorBoundary>
        }
      />
      {/* <Route
        path='db/:id'
        element={
          <ErrorBoundary>
            <Suspense>
              <PokemonDb />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path='*'
        element={
          <ErrorModal
            error={{ stack: '', name: 'Error', message: 'Not found Page' }}
          />
        }
      /> */}
    </Route>,
  ),
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

const Routers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerElements} />
    </QueryClientProvider>
  );
};

export default Routers;
