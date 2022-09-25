import './App.css';
import ExampleComponent from './whyUseHooks/showDiff/classComponent'
import HooksComponent from './whyUseHooks/showDiff/hooksComponent'
import Reuse from './whyUseHooks/stateResuse/reuse'
import ShowUseState from './commonHooks/useState'
import ShowUseEffect from './commonHooks/useEffect'
import ShowUseMemo from './commonHooks/useMemo'
import ShowUseRef from './commonHooks/ref'

function App() {
  return (
    <div className="App">
      {/*<ExampleComponent/>*/}
      {/*<HooksComponent/>*/}
      {/*<Reuse/>*/}
      {/*<ShowUseState/>*/}
      {/*<ShowUseEffect/>*/}
      {/*<ShowUseMemo/>*/}
      <ShowUseRef/>
    </div>
  );
}

export default App;
