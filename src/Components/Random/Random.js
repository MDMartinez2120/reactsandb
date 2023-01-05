import React, { useState, useEffect} from "react";

import {Users} from '../Users';

const Random = () => {
    // const [name, setName] = useState('Bob');


    const buttonHandler =  () => {

    };

    useEffect(() => {

    }, []);

    return (
        <div className='container'>
            <button onClick={buttonHandler}>Randomize</button>
            <ul className="profile-list">
                {
                    Users.map (user =>(
                        <li key={user.id}>
                            <span><strong> ID: </strong> {user.id}</span>
                            <span><strong> First Name: </strong> {user.first_name}</span>
                            <span><strong> Last Name: </strong> {user.last_name}</span>
                            <span><strong> Email: </strong> {user.email}</span>
                            <span><strong> Gender: </strong> {user.phone_number}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Random;