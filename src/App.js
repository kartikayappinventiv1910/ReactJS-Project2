import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { Store } from "./store";
import NotesApp from './noteApp';
import MoviePage  from './moviessrc/mainPage';
import WeatherApp  from './weatherApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NotesApp /> */}
        {/* <WeatherApp /> */}
        <Provider store={Store}>
        <MoviePage />
        </Provider>
      </header>
    </div>
  );
}

export default App;
