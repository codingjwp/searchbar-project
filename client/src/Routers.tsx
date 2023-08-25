import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const SearchHome = lazy(() => import("./pages/SearchHome"));
const PokemonDb = lazy(() => import("./pages/PokemonDb"));

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SearchHome />} />
      <Route path="db/:id" element={<PokemonDb />} />
    </Route>,
  ),
);

const Routers = () => {
  return <RouterProvider router={routerElements} />;
};

export default Routers;
