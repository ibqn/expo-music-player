import { useSearch } from "@/contexts/search-context"
import { useEffect } from "react"

export type NavigationSearchProps = {
  searchBarOptions?: {
    placeholder?: string
  }
}

export const useNavigationSearch = ({ searchBarOptions }: NavigationSearchProps) => {
  const { search, setSearch, setSearchBarOptions } = useSearch()

  useEffect(() => {
    if (searchBarOptions) {
      setSearchBarOptions(searchBarOptions)
    }
  }, [searchBarOptions, setSearchBarOptions])

  return { search, setSearch }
}
