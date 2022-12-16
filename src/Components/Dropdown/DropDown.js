import React, { useState } from "react";
import "../Dropdown/DropDown.css";
import Select from 'react-select';

const DropDown = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'rocky road', label: 'Rocky Road' },
        { value: 'espresso', label: 'Espresso' },
        { value: 'pistachio', label: 'Pistachio' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="search-bar">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
  );
}

export default DropDown;

// <div className="search">
//     <div className="search-bar">
//         <Select
//             defaultValue={selectedOption}
//             onChange={setSelectedOption}
//             options={options}
//         />
//     </div>
// </div>

// {/*<input*/}
// {/*  className="search"*/}
// {/*  placeholder="Search..."*/}
// {/*  onChange={(e) => setQuery(e.target.value.toLowerCase())}*/}
// {/*/>*/}
// {/*<ul className="list">*/}
// {/*  {Users.filter((asd) =>*/}
// {/*    asd.first_name.toLowerCase().includes(query)*/}
// {/*  ).map((user) => (*/}
// {/*    <li className="listItem" key={user.id}>*/}
// {/*      /!*{user.first_name}*!/*/}
// {/*    </li>*/}
// {/*  ))}*/}
// {/*</ul>*/}

// const options = ["Italy", "Spain", "Greece"];
//
// const [selected, setSelected] = useState(options[0]);
// <form>
//     <select
//         value = {selected}
//         onChange={e => setSelected(e.target.value)}>
//         {options.map((value) => (
//             <option value={value} key={value}>
//                 {value}
//             </option>
//         ))}
//     </select>
// </form>