import { colors, screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { MagnifyingGlassIcon, XIcon } from "phosphor-react-native"
import { useRef, useState } from "react"
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated"

type CustomHeaderProps = {
  title: string
  showSearch?: boolean
  scrollY?: SharedValue<number>
}

export const CustomHeader = ({ title, showSearch = false, scrollY }: CustomHeaderProps) => {
  const { search, setSearch, searchBarOptions } = useNavigationSearch({})
  const [titleWidth, setTitleWidth] = useState(0)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const inputRef = useRef<TextInput>(null)

  const { width } = Dimensions.get("window")
  const containerWidth = width - screenPadding.horizontal * 2

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
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <MagnifyingGlassIcon size={20} color={colors.textMuted} style={styles.searchIcon} />
            <TextInput
              ref={inputRef}
              style={styles.searchInput}
              placeholder={searchBarOptions.placeholder}
              placeholderTextColor={colors.textMuted}
              value={search}
              onChangeText={setSearch}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            {search.length > 0 && (
              <TouchableOpacity style={styles.clearButton} onPress={() => setSearch("")}>
                <XIcon size={12} color={colors.background} weight="bold" />
              </TouchableOpacity>
            )}
          </View>
          {isInputFocused && (
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                inputRef.current?.blur()
                setSearch("")
              }}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          )}
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
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  searchContainer: {
    position: "relative",
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingLeft: 48,
    paddingRight: 40,
    paddingVertical: 12,
    color: colors.text,
    fontSize: 16,
    height: 48,
  },
  searchIcon: {
    position: "absolute",
    left: 16,
    top: 14,
    zIndex: 1,
  },
  clearButton: {
    position: "absolute",
    right: 12,
    top: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: colors.textMuted,
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  cancelText: {
    color: "#ff4444",
    fontSize: 16,
    fontWeight: "500",
  },
})
