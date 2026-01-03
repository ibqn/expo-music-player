import { CustomHeader } from "@/components/custom-header"
import { TracksList } from "@/components/tracks-list"
import { colors, screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { useMemo, useRef } from "react"
import { Animated, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SongsScreen() {
  const searchBarOptions = useMemo(
    () => ({
      placeholder: "Search songs...",
    }),
    []
  )

  const { search } = useNavigationSearch({ searchBarOptions })
  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <SafeAreaView style={[defaultStyles.container]}>
      <CustomHeader title="Songs" showSearch scrollY={scrollY} />
      <TracksList
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
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
