import { CustomHeader } from "@/components/custom-header"
import { defaultStyles } from "@/styles"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={[defaultStyles.container]}>
      <CustomHeader title="Favorites" />
      <Text style={defaultStyles.text}>Favorites Screen</Text>
    </SafeAreaView>
  )
}
