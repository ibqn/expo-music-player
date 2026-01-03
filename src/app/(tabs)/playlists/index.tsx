import { CustomHeader } from "@/components/custom-header"
import { defaultStyles } from "@/styles"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function PlaylistsScreen() {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <CustomHeader title="Playlists" />
      <Text style={defaultStyles.text}>Playlists Screen</Text>
    </SafeAreaView>
  )
}
