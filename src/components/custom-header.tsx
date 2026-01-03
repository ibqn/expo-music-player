import { colors, screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { useState } from "react"
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native"
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated"

type CustomHeaderProps = {
  title: string
  showSearch?: boolean
  scrollY?: SharedValue<number>
}

export const CustomHeader = ({ title, showSearch = false, scrollY }: CustomHeaderProps) => {
  const { search, setSearch, searchBarOptions } = useNavigationSearch({})
  const [titleWidth, setTitleWidth] = useState(0)

  const { width } = Dimensions.get("window")
  const containerWidth = width - screenPadding.horizontal * 2

  // Calculate actual center offset based on measured width at target size
  const centerOffset = titleWidth > 0 ? containerWidth / 2 - titleWidth / 2 : 0

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const paddingTop = scrollY ? interpolate(scrollY.value, [0, 100], [60, 0], Extrapolation.CLAMP) : 60

    return { paddingTop }
  })

  const animatedTitleStyle = useAnimatedStyle(() => {
    const fontSize = scrollY ? interpolate(scrollY.value, [0, 100], [34, 20], Extrapolation.CLAMP) : 34

    const translateX = scrollY ? interpolate(scrollY.value, [0, 100], [0, centerOffset], Extrapolation.CLAMP) : 0

    return {
      fontSize,
      transform: [{ translateX }],
    }
  })

  return (
    <Animated.View style={[styles.container, animatedHeaderStyle]}>
      {/* Hidden text to measure width at target font size */}
      <Text
        style={[styles.title, { fontSize: 20, position: "absolute", opacity: 0, pointerEvents: "none" }]}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout
          setTitleWidth(width)
        }}
      >
        {title}
      </Text>

      <Animated.Text style={[styles.title, animatedTitleStyle]}>{title}</Animated.Text>
      {showSearch && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={searchBarOptions.placeholder}
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
            clearButtonMode="while-editing"
          />
        </View>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: colors.background,
  },
  title: {
    ...defaultStyles.text,
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.text,
    fontSize: 16,
    height: 48,
  },
})
