import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SearchHome from "./pages/SearchHome";
import PokemonDb from "./pages/PokemonDb";
import ErrorBoundary from "./apis/ErrorBoundary";

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <Suspense fallback={<div>Loading..</div>}>
              <SearchHome />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="db/:id" element={<PokemonDb />} />
    </Route>,
  ),
);

const Routers = () => {
  return <RouterProvider router={routerElements} />;
};

export default Routers;
