import { colors, screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/use-navigation-search"
import { defaultStyles } from "@/styles"
import { StyleSheet, Text, TextInput, View } from "react-native"

type CustomHeaderProps = {
  title: string
  showSearch?: boolean
}

export const CustomHeader = ({ title, showSearch = false }: CustomHeaderProps) => {
  const { search, setSearch, searchBarOptions } = useNavigationSearch({})

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
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
