
import React from 'react';
import { ENDPOINT_URL } from '../util/constants';

const AddItemButton = React.forwardRef(({ name, reFetchItems}, ref) => {

    const handleClick = () => {
        const item = {title: name};

    fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(json => console.log(json));
        reFetchItems();
    }
    return (
        <button onClick={handleClick} ref={ref}>Add item </button>
    )
});

export default AddItemButton
