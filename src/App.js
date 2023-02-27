import logo from './logo.svg';
import './App.css';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tareas</h2>
        <ListaTareas/>
      </header>
    </div>
  );
}

export default App;
