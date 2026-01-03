import { CustomHeader } from "@/components/custom-header"
import { defaultStyles } from "@/styles"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ArtistsScreen() {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <CustomHeader title="Artists" />
      <Text style={defaultStyles.text}>Artists Screen</Text>
    </SafeAreaView>
  )
}
