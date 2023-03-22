import { useState } from "react"
import SearchBox from "./components/SearchBox"

import userData from '../../data/users.json'
import SearchResult from "./components/SearchResults"
import './style.css'

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false)
  const [results, setResults] = useState()

  const handleCloseSearch = () => {
    setIsAtTop(false)
    setResults([])
  }
  const handleSearchClick = (searchText) => {
    setIsAtTop(true)
    if (userData?.length) {
      const searchTextMinus = searchText.toLowerCase()
      const filteredData = userData.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchTextMinus) ||
          user.username.toLowerCase().includes(searchTextMinus) ||
          user.phone.toLowerCase().includes(searchTextMinus) ||
          user.email.toLowerCase().includes(searchTextMinus)
        );
      })
      setResults(filteredData)
    }
  }

  return (
    <div className={`search ${isAtTop ? 'search--top' : 'search--center'}`}>
      <SearchBox
        onSearch={handleSearchClick}
        onClose={handleCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResult
        users={results}
        isSearching={isAtTop}
      />
    </div>
  )
}