import './App.css';
import Navbar from './components/Navbar'
import MenuIems from './components/MenuItems'
import SelectComponent from './components/SelectComponent'
import BodyComponent from './components/BodyComponent'


function App() {
  return (
    <div className="App">
      <Navbar />
      <MenuIems />
      <SelectComponent />
      <BodyComponent />
    </div>
  );
}

export default App;
