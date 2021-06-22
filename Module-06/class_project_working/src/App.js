import { Layout } from './components/Layout/Layout';
import { useState } from 'react';
import { AppStore } from './components/AppContext/AppContext';

function App() {
  const [userName, setUserName] = useState("Kyle");

  return (
    <div className="App">
      {/* Layout and all it's children now have access to the AppStore because of props.children in AppStore.js */}
      <AppStore>
        <Layout />
      </AppStore>
      
    </div>
  )
};

export default App;
