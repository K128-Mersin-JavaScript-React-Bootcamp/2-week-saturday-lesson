import React from 'react'

const MyList = ({ items, setItems }) => {

    const handleDelete = (id) => {
        setItems(items.filter((v, i) => {
            return v.id !== id
        }));
    }
    return (
        <ul>
            {
                items.map((v, i) => {
                    return <li key={v.id} data-id={v.id}>
                        {v.title}
                        <button onClick={() => handleDelete(v.id)}>Sil</button>
                    </li>
                })
            }
        </ul>
    )
}

export default MyList
