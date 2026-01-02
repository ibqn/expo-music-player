import { TracksList } from "@/components/tracks-list"
import { screenPadding } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { View } from "react-native"

export default function SongsScreen() {
  return (
    <View style={defaultStyles.container}>
      <TracksList 
        contentInsetAdjustmentBehavior="automatic" 
        contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal }}
      />
    </View>
  )
}
