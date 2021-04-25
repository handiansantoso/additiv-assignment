import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Explorer from './components/ExplorerComponent';
import Overview from './components/OverviewComponents';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/explorer" component={Explorer} />
        <Route path="/overview/:id" component={Overview} />
        <Redirect to="/explorer" />
      </Switch>
    </div >
  );
}

export default App;
