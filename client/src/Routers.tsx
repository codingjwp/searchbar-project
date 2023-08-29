import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SearchHome from "./pages/SearchHome";
import PokemonDb from "./pages/PokemonDb";
import ErrorBoundary from "./apis/ErrorBoundary";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <SearchHome />
          </ErrorBoundary>
        }
      />
      <Route
        path="db/:id"
        element={
          <RecoilRoot override={true}>
            <Suspense>
              <PokemonDb />
            </Suspense>
          </RecoilRoot>
        }
      />
    </Route>,
  ),
);

const Routers = () => {
  return <RouterProvider router={routerElements} />;
};

export default Routers;
