import "./App.css";
import NamePicker from "./components/NamePicker";
import Shortlist from "./components/Shortlist";
import SearchBar from "./components/Searchbar";
import { GlobalProvider } from "./context/GlobalState";
// import SearchBar from "./Components/Searchbar";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <SearchBar />
        <Shortlist />
        <NamePicker />
      </GlobalProvider>
    </div>
  );
}

export default App;
