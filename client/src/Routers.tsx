import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import SearchHome from './pages/SearchHome';
import PokemonDb from './pages/PokemonDb';
import ErrorModal from './components/ErrorModal';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Suspense} from 'react';

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<SearchHome />} errorElement={<ErrorModal />} />
      <Route
        path='db/:id'
        element={
          <Suspense>
            <PokemonDb />
          </Suspense>
        }
        errorElement={<ErrorModal />}
      />
      <Route path='*' element={<ErrorModal />} />
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
