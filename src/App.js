import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { Store } from "./store";
import NotesApp from './noteApp';
import MoviePage  from './moviessrc/mainPage';
import WeatherApp  from './weatherApp';
import RentalMS from './rental';

function App() {
  return (
    <>
        {/* <NotesApp /> */}
        {/* <WeatherApp /> */}
        <RentalMS />
        {/* <Provider store={Store}>
        <MoviePage />
        </Provider> */}
        </>
  );
}

export default App;
