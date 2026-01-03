import React, { createContext, useContext, useState } from "react"

type SearchContextType = {
  search: string
  setSearch: (text: string) => void
  searchBarOptions: {
    placeholder?: string
  }
  setSearchBarOptions: (options: { placeholder?: string }) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("")
  const [searchBarOptions, setSearchBarOptions] = useState<{ placeholder?: string }>({
    placeholder: "Search...",
  })

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchBarOptions,
        setSearchBarOptions,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
