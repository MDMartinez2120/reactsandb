// import React, { useState, useEffect} from "react";
//
// import {Users} from '../Users';
//
// const Random = () => {
//     // const [name, setName] = useState('Bob');
//     const [user, setUser] = useState('');
//
//     const getRandomUser = () => {
//         const randomUser = Math.floor(Math.random() * Users.length);
//         console.log(randomUser);
//
//         randomUser.map(userr => (
//             <li key={userr.id}>
//                 <span><strong> ID: </strong> {userr.id}</span>
//                 <span><strong> First Name: </strong> {userr.first_name}</span>
//                 <span><strong> Last Name: </strong> {userr.last_name}</span>
//                 <span><strong> Email: </strong> {userr.email}</span>
//                 <span><strong> Gender: </strong> {userr.phone_number}</span>
//             </li>
//         ))
//     }
//
//
//
//
//     const buttonHandler =  () => {
//         setUser(getRandomUser);
//     };
//
//     useEffect(() => {
//
//     }, []);
//
//     return (
//         <div className='container'>
//             <button onClick={buttonHandler}>Randomize</button>
//             <ul className="profile-list">
//                 {user}
//             </ul>
//         </div>
//     )
// }
//
// export default Random;