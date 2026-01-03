import { colors, screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { useState } from "react"
import { Animated, Dimensions, StyleSheet, Text, TextInput, View } from "react-native"

type CustomHeaderProps = {
  title: string
  showSearch?: boolean
  scrollY?: Animated.Value
}

export const CustomHeader = ({ title, showSearch = false, scrollY }: CustomHeaderProps) => {
  const { search, setSearch, searchBarOptions } = useNavigationSearch({})
  const [titleWidth, setTitleWidth] = useState(0)

  const { width } = Dimensions.get("window")
  const containerWidth = width - screenPadding.horizontal * 2

  const paddingTop = scrollY
    ? scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [60, 0],
        extrapolate: "clamp",
      })
    : 60

  const titleFontSize = scrollY
    ? scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [34, 24],
        extrapolate: "clamp",
      })
    : 34

  // Calculate actual center offset based on measured width at target size
  const centerOffset = titleWidth > 0 ? containerWidth / 2 - titleWidth / 2 : 0

  const titleTranslateX = scrollY
    ? scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, centerOffset],
        extrapolate: "clamp",
      })
    : 0

  return (
    <Animated.View style={[styles.container, { paddingTop }]}>
      {/* Hidden text to measure width at target font size */}
      <Text
        style={[styles.title, { fontSize: 24, position: "absolute", opacity: 0 }]}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout
          setTitleWidth(width)
        }}
      >
        {title}
      </Text>

      <Animated.Text
        style={[
          styles.title,
          {
            fontSize: titleFontSize,
            transform: [{ translateX: titleTranslateX }],
          },
        ]}
      >
        {title}
      </Animated.Text>
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
