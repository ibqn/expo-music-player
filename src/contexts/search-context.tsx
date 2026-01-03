import { createContext, type ReactNode, useState } from "react"

type SearchContextType = {
  search: string
  setSearch: (text: string) => void
  searchBarOptions: {
    placeholder?: string
  }
  setSearchBarOptions: (options: { placeholder?: string }) => void
}

export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
  searchBarOptions: { placeholder: "Search..." },
  setSearchBarOptions: () => {},
})

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("")
  const [searchBarOptions, setSearchBarOptions] = useState<{ placeholder?: string }>({
    placeholder: "Search...",
  })

  return (
    <SearchContext
      value={{
        search,
        setSearch,
        searchBarOptions,
        setSearchBarOptions,
      }}
    >
      {children}
    </SearchContext>
  )
}
