import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [validationError, setValidationError] =
    useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      setValidationError(
        'Please enter a food name.'
      )
      return
    }

    if (query.trim().length < 2) {
      setValidationError(
        'Search must be at least 2 characters.'
      )
      return
    }

    setValidationError('')
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search food..."
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button type="submit">Search</button>

      {validationError && (
        <p className="validation-error">
          {validationError}
        </p>
      )}
    </form>
  )
}

export default SearchBar