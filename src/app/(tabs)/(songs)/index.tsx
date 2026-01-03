import { CustomHeader } from "@/components/custom-header"
import { TracksList } from "@/components/tracks-list"
import { colors, screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { useMemo } from "react"
import { Text } from "react-native"
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SongsScreen() {
  const searchBarOptions = useMemo(
    () => ({
      placeholder: "Search songs...",
    }),
    []
  )

  const { search } = useNavigationSearch({ searchBarOptions })
  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  return (
    <SafeAreaView style={[defaultStyles.container]}>
      <CustomHeader title="Songs" showSearch scrollY={scrollY} />
      <TracksList
        onScroll={scrollHandler}
        scrollEventThrottle={16}
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
