import { stackScreenWithSearchBar } from "@/constants/layout"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

export default function PlaylistsScreenLayout() {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ ...stackScreenWithSearchBar, headerTitle: "Playlists" }} />
      </Stack>
    </View>
  )
}
