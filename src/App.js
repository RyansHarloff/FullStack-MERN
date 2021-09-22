import './App.css';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import Dog from './views/Dog';
import Cat from './views/Cat';
import One from './views/One';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App"> 
    <h1><Link to ="/">Home</Link> | <Link to ="/item/dog">Dog Bowls</Link> | <Link to = "/item/cat">Cat Bowls</Link></h1>
      <Router>
        <Main path="/"/>
        <Dog path="/item/dog"/>
        <Cat path="/item/cat"/>
        <One path="/item/:_id"/>
      </Router>
    </div>
  );
}

export default App;
