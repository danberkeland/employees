
import { Amplify } from 'aws-amplify';
import './App.css';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile)

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
