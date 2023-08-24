import Routers from "./Routers";
import RecoilState from "./apis/recoilState";

function App() {
  return (
    <RecoilState>
      <Routers />
    </RecoilState>
  );
}
export default App;
