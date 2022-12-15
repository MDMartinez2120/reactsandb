import React, { useState } from "react";
import "../Dropdown/DropDown.css";
import Select from 'react-select';

const DropDown = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
    <div className="search">
        <div className="search-bar">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    </div>
  );
}

export default DropDown;

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