import DropDown from "./Components/Dropdown/DropDown";
import Header from "./Components/Header/Header";
import Card from "./Components/UI/Card/Card";
import DataTable from "./Components/DataTable/DataTable";
import {Users} from "./Components/Users";
import DropDown2 from "./Components/Dropdown/DropDown2";
import './styles.css';

function App() {
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" }
  ];

  return (
    <div className="App">
        {/*<DropDown />*/}
      <DropDown2
          isSearchable
          isMulti
          placeHolder="Select..."
          options={options}
          onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;