const Search = ({newFilter, handleFilterChange}) => {
    return (
        <>
            <h2>Phonebook</h2>
            filter shown with <input 
                value={newFilter}
                onChange={handleFilterChange}
            />
        </>

    )
}

export default Search