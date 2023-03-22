import React from 'react'

import SearchResultItem from '../SearchResultsItem.js'

export default function SearchResult({ users, isSearching }) {
  return (
    <div style={{ width: '100%', padding: '0rem 2rem' }} >
      {!users?.length && isSearching && <h2> No existen resultado</h2>}
      {users?.map((user) => <SearchResultItem key={user.id} user={user} />
      )}
    </div>
  )
}
