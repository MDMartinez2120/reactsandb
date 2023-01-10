import React from "react";

import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import {Users} from '../Users';

const Dropdown4 = () => {

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>First Name: {item.first_name}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>Last Name: {item.last_name}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>Email: {item.email}</span>
            </>
        )
    }

    return (
        <div>
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={Users}
                        fuseOptions={{ keys: ["first_name", "last_name"] }}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    )
}

export default Dropdown4;