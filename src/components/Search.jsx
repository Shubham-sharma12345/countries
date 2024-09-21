

const Search = ({ setQuery }) => {
  return (
    <div>
     <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} placeholder="search..."/>
    </div>
  )
}

export default Search
