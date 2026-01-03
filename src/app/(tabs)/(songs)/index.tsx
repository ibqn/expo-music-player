import { CustomHeader } from "@/components/custom-header"
import { TracksList } from "@/components/tracks-list"
import { colors, screenPadding } from "@/constants/tokens"
import { useSearch } from "@/contexts/search-context"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SongsScreen() {
  const searchBarOptions = {
    placeholder: "Search songs...",
  }

  useNavigationSearch({ searchBarOptions })
  const { search } = useSearch()

  return (
    <SafeAreaView style={[defaultStyles.container]}>
      <CustomHeader title="Songs" showSearch />
      <TracksList
        ListHeaderComponent={
          search ? (
            <Text
              style={{
                color: colors.primary,
                paddingHorizontal: screenPadding.horizontal,
                marginBottom: 10,
                fontSize: 14,
              }}
            >
              Searching for: {search}
            </Text>
          ) : null
        }
        contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal }}
      />
    </SafeAreaView>
  )
}
