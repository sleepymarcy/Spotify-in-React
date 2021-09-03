import Sidebar from './components/Sidebar'
import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Route exact path='/' componet={Home} />
      <Route path='/' component={Sidebar} />
    </Router>
  );
}

export default App;