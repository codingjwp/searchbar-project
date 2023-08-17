import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import SearchHome from './pages/SearchHome'
import PokemonDb from './pages/PokemonDb'

const routerElements = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SearchHome />} />
      <Route path="db/:id" element={<PokemonDb />} />
    </Route>
  )
);

const Routers = () => {
  return (<RouterProvider router={routerElements} />)
}

export default Routers;