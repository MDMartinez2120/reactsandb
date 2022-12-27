// import React, { useState } from "react";
// import "../Dropdown/DropDown.css";
// import {Users} from '../Users';
// import DataTable from "../DataTable/DataTable";
//
// const DropDown = () => {
//
//     const [search, setSearch] = useState('');
//
//     const searchUsers = (data) => {
//         return data.filter((item) => item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search)
//         || item.email.toLowerCase().includes(search))
//     }
//
//     return (
//         <div className='search-bar'>
//             <input type='text' placeholder='search...' className='search' onChange={e => setSearch(e.target.value)}/>
//             {/*<ul className='list'>*/}
//             {/*    /!*{Users.filter(user => user.first_name.toLowerCase().includes(search)).map((user) => (*!/*/}
//             {/*    /!*<li key={user.id} className='list-item'>{user.first_name}</li>*!/*/}
//             {/*    /!*))}*!/*/}
//             {/*</ul>*/}
//             <DataTable Data={searchUsers(Users)} />
//         </div>
//   );
// }
//
// export default DropDown;
//
// // <div className="search">
// //     <div className="search-bar">
// //         <Select
// //             defaultValue={selectedOption}
// //             onChange={setSelectedOption}
// //             options={options}
// //         />
// //     </div>
// // </div>
//
// // {/*<input*/}
// // {/*  className="search"*/}
// // {/*  placeholder="Search..."*/}
// // {/*  onChange={(e) => setQuery(e.target.value.toLowerCase())}*/}
// // {/*/>*/}
// // {/*<ul className="list">*/}
// // {/*  {Users.filter((asd) =>*/}
// // {/*    asd.first_name.toLowerCase().includes(query)*/}
// // {/*  ).map((user) => (*/}
// // {/*    <li className="listItem" key={user.id}>*/}
// // {/*      /!*{user.first_name}*!/*/}
// // {/*    </li>*/}
// // {/*  ))}*/}
// // {/*</ul>*/}
//
// // const options = ["Italy", "Spain", "Greece"];
// //
// // const [selected, setSelected] = useState(options[0]);
// // <form>
// //     <select
// //         value = {selected}
// //         onChange={e => setSelected(e.target.value)}>
// //         {options.map((value) => (
// //             <option value={value} key={value}>
// //                 {value}
// //             </option>
// //         ))}
// //     </select>
// // </form>
//
// // {/*<Select*/}
// // {/*    defaultValue={selectedOption}*/}
// // {/*    onChange={setSelectedOption}*/}
// // {/*    options={options}*/}
// // {/*/>*/}
//
//
//
// // const options = [
// //     { value: 'chocolate', label: 'Chocolate' },
// //     { value: 'strawberry', label: 'Strawberry' },
// //     { value: 'vanilla', label: 'Vanilla' },
// //     { value: 'rocky road', label: 'Rocky Road' },
// //     { value: 'espresso', label: 'Espresso' },
// //     { value: 'pistachio', label: 'Pistachio' },
// // ];
// // const [search, setSearch] = useState('');