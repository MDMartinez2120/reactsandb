import React, { useState } from "react";

import "react-widgets/styles.css";
import {DropdownList} from "react-widgets/cjs";

import {Users} from '../Users';
import Multiselect from "react-widgets/Multiselect";

const DropDown3 = () => {

    return (
    //     <DropdownList
    //         data={Users}
    //         textField='fullName'
    //         filter='contains'
    //         renderListItem={({ item }) => (
    //             <span>
    //   <strong>{item.first_name}</strong>
    //                 {" " + item.last_name}
    // </span>
    //         )}
    //     />
    //     <Multiselect
    //         data={Users}
    //         textField='full_name'
    //         filter='contains'
    //     />
        <Multiselect
            data={Users}
            textField='email'
            // groupBy={person => person.email} //Creates a bold duplicate email.
            renderListGroup={ ({ group }) => (
                <span>{group}</span>
            )}
        />
    )
}

export default DropDown3;