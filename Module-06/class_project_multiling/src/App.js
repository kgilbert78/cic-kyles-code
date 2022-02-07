import { Layout } from './components/Layout/Layout';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState("Kyle");

  return (
    <div className="App">
        <Layout />
    </div>
  )
};

export default App;
