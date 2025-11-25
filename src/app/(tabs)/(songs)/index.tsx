import { TracksList } from "@/components/tracks-list"
import { screenPadding } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { View } from "react-native"

export default function SongsScreen() {
  return (
    <View style={{ ...defaultStyles.container, paddingTop: 100, paddingHorizontal: screenPadding.horizontal }}>
      <TracksList />
    </View>
  )
}
