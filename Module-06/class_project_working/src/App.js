import { Layout } from './components/Layout/Layout';
import { Service } from './service/service';

// For useReducer & useContext stuff from CiC 6/16/21 (Class 55) Video:

// Service === Joey's "Store" & service === Joey's "store"
// useContextDispatchService === Joey's "useStore"
// initialContextService === Joey's "initialStore"
// ContextService === Joey's "AppStore"


function App() {

  return (
    <div className="App">
      {/* Layout and all it's children now have access to the Service because of props.children in service.js */}
      <Service>
        <Layout />
      </Service>
      
    </div>
  )
};

export default App;
