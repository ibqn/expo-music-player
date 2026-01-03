import { SearchContext } from "@/contexts/search-context"
import { useContext, useEffect } from "react"

export type NavigationSearchProps = {
  searchBarOptions?: {
    placeholder?: string
  }
}

export const useNavigationSearch = ({ searchBarOptions }: NavigationSearchProps) => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error("useNavigationSearch must be used within a SearchProvider")
  }

  const { search, setSearch, setSearchBarOptions, searchBarOptions: contextOptions } = context

  useEffect(() => {
    if (searchBarOptions) {
      setSearchBarOptions(searchBarOptions)
    }
  }, [searchBarOptions, setSearchBarOptions])

  return { search, setSearch, searchBarOptions: contextOptions }
}
