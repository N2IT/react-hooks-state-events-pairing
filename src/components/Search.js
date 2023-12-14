import React from 'react'

function Search({ search, onSearchChange}) {
    return (
        <form>
            <input type="text" placeholder='Search...' value={search} onChange={e => onSearchChange(e.target.value)} />
        </form>
    )
}

export default Search